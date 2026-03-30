import { describe, test } from "node:test";
import { strictEqual } from "node:assert";
import { formatMathBlocks, formatKatex } from "./fmt-math-lib.ts";

describe("formatMathBlocks", () => {
  test("plain text is unchanged", () => {
    const src = "Hello world\nNo math here.";
    strictEqual(formatMathBlocks(src), src);
  });

  test("removes blank lines inside $$ blocks", () => {
    const src = ["$$", "a", "", "b", "$$"].join("\n");
    const expected = ["$$", "a", "b", "$$"].join("\n");
    strictEqual(formatMathBlocks(src), expected);
  });

  test("inserts newline after \\\\", () => {
    const src = ["$$", "a \\\\ b", "$$"].join("\n");
    const expected = ["$$", "a \\\\", "b", "$$"].join("\n");
    strictEqual(formatMathBlocks(src), expected);
  });

  test("separates and indents \\begin{} / \\end{}", () => {
    const src = ["$$", "\\begin{aligned} x \\\\ y \\end{aligned}", "$$"].join(
      "\n",
    );
    const expected = [
      "$$",
      "\\begin{aligned}",
      "  x \\\\",
      "  y",
      "\\end{aligned}",
      "$$",
    ].join("\n");
    strictEqual(formatMathBlocks(src), expected);
  });

  test("expands single-line $$ into multiline", () => {
    const src = "$$x + y$$";
    const expected = ["$$", "x + y", "$$"].join("\n");
    strictEqual(formatMathBlocks(src), expected);
  });

  test("skips $$ inside code blocks", () => {
    const src = ["```", "$$", "a + b", "$$", "```"].join("\n");
    strictEqual(formatMathBlocks(src), src);
  });

  test("unclosed $$ flushes buffer as-is", () => {
    const src = ["$$", "a + b"].join("\n");
    strictEqual(formatMathBlocks(src), src);
  });
});

describe("formatKatex", () => {
  test("removes blank lines", () => {
    const result = formatKatex(["a", "", "b"]);
    strictEqual(result.join("\n"), "a\nb");
  });

  test("splits on \\\\", () => {
    const result = formatKatex(["a \\\\ b"]);
    strictEqual(result.join("\n"), "a \\\\\nb");
  });

  test("indents nested \\begin / \\end", () => {
    const result = formatKatex(["\\begin{cases}", "x", "\\end{cases}"]);
    strictEqual(result.join("\n"), "\\begin{cases}\n  x\n\\end{cases}");
  });

  test("keeps \\begin{} arguments on the same line", () => {
    const result = formatKatex([
      "\\begin{array}{ccc}",
      "a & b & c \\\\",
      "\\end{array}",
    ]);
    strictEqual(
      result.join("\n"),
      "\\begin{array}{ccc}\n  a & b & c \\\\\n\\end{array}",
    );
  });
});
