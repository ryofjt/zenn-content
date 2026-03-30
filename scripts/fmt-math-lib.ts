export function formatMathBlocks(src: string): string {
  const result: string[] = [];
  let inCode = false;
  let inMath = false;
  let mathBuf: string[] = [];

  for (const line of src.split("\n")) {
    if (/^(`{3,}|~{3,})/.test(line.trimStart())) {
      inCode = !inCode;
      result.push(line);
      continue;
    }

    if (inCode) {
      result.push(line);
      continue;
    }

    // Single-line $$...$$ → expand and format inline
    const m = line.match(/^(\s*)\$\$(.+)\$\$\s*$/);
    if (m && !inMath) {
      result.push(`${m[1]}$$`, ...formatKatex([m[2]]), `${m[1]}$$`);
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
      result.push(...formatKatex(mathBuf), line);
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

export function formatKatex(lines: string[]): string[] {
  // 1. Remove blank lines
  let out = lines.filter((l) => l.trim() !== "");

  // 2. Insert newline after \\ (if not already at end of line)
  out = out.flatMap((l) => {
    const parts: string[] = [];
    let rest = l;
    while (true) {
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
    const bm = trimmed.match(/^(\\begin\{[^}]+\}(?:\{[^}]*\}|\[[^\]]*\])*)\s*((?![{\[]).+)$/);
    if (bm) return [bm[1], bm[2]];
    const em = trimmed.match(/^(.+?)\s*(\\end\{[^}]+\})$/);
    if (em) return [em[1], em[2]];
    return [l];
  });

  // 4. Indent \begin{} / \end{} blocks with 2 spaces
  const indented: string[] = [];
  let depth = 0;
  for (const line of out) {
    const trimmed = line.trim();
    if (/\\end\{/.test(trimmed)) depth = Math.max(0, depth - 1);
    indented.push(depth > 0 ? "  ".repeat(depth) + trimmed : trimmed);
    if (/\\begin\{/.test(trimmed)) depth++;
  }

  return indented;
}
