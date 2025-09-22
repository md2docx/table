import fs from "node:fs";
import { toDocx } from "@m2d/core"; // Adjust path based on your setup
import { htmlPlugin } from "@m2d/html";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { describe, it } from "vitest";
import { tablePlugin } from "../src";

const markdown = fs.readFileSync("../sample.md", "utf-8");

describe("toDocx", () => {
  it("should handle tables", async ({ expect }) => {
    const mdast = unified().use(remarkParse).use(remarkGfm).parse(markdown);

    const docxBlob = await toDocx(
      mdast,
      {},
      { plugins: [htmlPlugin(), tablePlugin()] },
    );

    expect(docxBlob).toBeInstanceOf(Blob);
  });

  it("should handle tables with options", async ({ expect }) => {
    const mdast = unified().use(remarkParse).use(remarkGfm).parse(markdown);

    const docxBlob = await toDocx(
      mdast,
      {},
      {
        plugins: [
          htmlPlugin(),
          tablePlugin({ alignments: { preferMdData: false } }),
        ],
      },
    );

    expect(docxBlob).toBeInstanceOf(Blob);
  });
});
