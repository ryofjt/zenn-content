import { readFile, writeFile, glob } from "node:fs/promises";
import { formatMathBlocks } from "./fmt-math-lib.ts";

const CHECK = process.argv.includes("--check");
let dirty = false;

for await (const file of glob("{books,articles}/**/*.md")) {
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
