import { readFile, writeFile, glob } from "node:fs/promises";

async function main() {
  const CHECK = process.argv.includes("--check");
  const patterns = ["books/**/*.md", "articles/**/*.md"];

  const files: string[] = [];
  for (const pattern of patterns) {
    for await (const f of glob(pattern)) files.push(f);
  }

  let dirty = false;

  for (const file of files) {
    const src = await readFile(file, "utf8");
    const out = formatMathBlocks(src);
    if (src === out) continue;
    if (CHECK) {
      console.error(`[fmt-math] not formatted: ${file}`);
      dirty = true;
      continue;
    }
    await writeFile(file, out);
    console.log(`[fmt-math] formatted: ${file}`);
  }

  if (CHECK && dirty) process.exit(1);
}

main();

// ── helpers ──────────────────────────────────────────────────────────

function formatMathBlocks(src: string): string {
  // Pre-process: split single-line $$...$$ into multi-line
  let inCodePre = false;
  const expanded = src.split("\n").flatMap((line) => {
    if (/^(`{3,}|~{3,})/.test(line.trimStart())) {
      inCodePre = !inCodePre;
      return [line];
    }
    if (inCodePre) return [line];
    const m = line.match(/^(\s*)\$\$(.+)\$\$\s*$/);
    if (m) return [`${m[1]}$$`, m[2], `${m[1]}$$`];
    return [line];
  });

  const lines = expanded;
  const result: string[] = [];
  let inCode = false;
  let inMath = false;
  let mathBuf: string[] = [];

  for (const line of lines) {
    // Track fenced code blocks (``` or ~~~)
    if (/^(`{3,}|~{3,})/.test(line.trimStart())) {
      inCode = !inCode;
      result.push(line);
      continue;
    }

    if (inCode) {
      result.push(line);
      continue;
    }

    if (!inMath && line.trimStart() === "$$") {
      inMath = true;
      mathBuf = [];
      result.push(line);
      continue;
    }

    if (inMath && line.trimStart() === "$$") {
      inMath = false;
      result.push(...formatKatex(mathBuf));
      result.push(line);
      continue;
    }

    if (inMath) {
      mathBuf.push(line);
    } else {
      result.push(line);
    }
  }

  // If $$ was never closed, flush buffer as-is
  if (inMath) result.push(...mathBuf);

  return result.join("\n");
}

function formatKatex(lines: string[]): string[] {
  // 1. Remove blank lines
  let out = lines.filter((l) => l.trim() !== "");

  // 2. Insert newline after \\ (if not already at end of line)
  out = out.flatMap((l) => {
    const parts: string[] = [];
    let rest = l;
    while (true) {
      // Match \\ followed by optional spaces then non-empty content
      const m = rest.match(/^(.*?\\\\)\s*(\S.*)$/);
      if (!m) break;
      parts.push(m[1]);
      rest = m[2];
    }
    parts.push(rest);
    return parts;
  });

  // 3. Insert newline after \begin{...} and before \end{...}
  out = out.flatMap((l) => {
    const trimmed = l.trim();
    const parts: string[] = [];
    // \begin{...} followed by content on same line
    const bm = trimmed.match(/^(\\begin\{[^}]+\})\s*(.+)$/);
    if (bm) {
      parts.push(bm[1]);
      parts.push(bm[2]);
      return parts;
    }
    // content followed by \end{...} on same line
    const em = trimmed.match(/^(.+?)\s*(\\end\{[^}]+\})$/);
    if (em) {
      parts.push(em[1]);
      parts.push(em[2]);
      return parts;
    }
    return [l];
  });

  // 4. Indent \begin{} / \end{} blocks with 2 spaces
  const indented: string[] = [];
  let depth = 0;
  for (const line of out) {
    const trimmed = line.trim();
    // Decrease depth before \end
    if (/\\end\{/.test(trimmed)) depth = Math.max(0, depth - 1);
    indented.push(depth > 0 ? "  ".repeat(depth) + trimmed : trimmed);
    // Increase depth after \begin
    if (/\\begin\{/.test(trimmed)) depth++;
  }

  return indented;
}
