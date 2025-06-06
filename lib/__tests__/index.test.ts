import { describe, it } from "vitest";
import { toDocx } from "@m2d/core"; // Adjust path based on your setup
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import fs from "fs";
import { tablePlugin } from "../src";
import { htmlPlugin } from "@m2d/html";

const markdown = fs.readFileSync("../sample.md", "utf-8");

describe("toDocx", () => {
  it("should handle tables", async ({ expect }) => {
    const mdast = unified().use(remarkParse).use(remarkGfm).parse(markdown);

    const docxBlob = await toDocx(mdast, {}, { plugins: [htmlPlugin(), tablePlugin()] });

    expect(docxBlob).toBeInstanceOf(Blob);
  });

  it("should handle tables with options", async ({ expect }) => {
    const mdast = unified().use(remarkParse).use(remarkGfm).parse(markdown);

    const docxBlob = await toDocx(
      mdast,
      {},
      { plugins: [htmlPlugin(), tablePlugin({ alignments: { preferMdData: false } })] },
    );

    expect(docxBlob).toBeInstanceOf(Blob);
  });
});
