"use client";

import { emojiPlugin } from "@m2d/emoji";
import { tablePlugin } from "@m2d/table";
// import { remarkDocx } from "@m2d/remark-docx";
import { toDocx } from "mdast2docx";
import {
  htmlPlugin,
  imagePlugin,
  listPlugin,
  mathPlugin,
} from "mdast2docx/dist/plugins";
import { useState } from "react";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { removePosition } from "unist-util-remove-position";
import md from "../../../../../sample.md?raw";
import { CodeDisplay } from "./code-display";
import styles from "./demo.module.scss";
// skipcq: JS-R1001
import demoCode from "./demo.tsx?raw";

/** React live demo */
export function Demo() {
  const [loading, setLoading] = useState(false);
  const mdastProcessor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter)
    .use(remarkMath);

  const mdast = mdastProcessor.parse(md);

  removePosition(mdast);

  // const docxProcessor = unified()
  //   .use(remarkParse)
  //   .use(remarkGfm)
  //   .use(remarkFrontmatter)
  //   .use(remarkMath)
  //   .use(remarkDocx);

  const downloadDocx = () => {
    setLoading(true);

    toDocx(
      mdast,
      {},
      {
        plugins: [
          htmlPlugin(),
          tablePlugin({ firstRowCellProps: { data: { bold: true } } }),
          listPlugin(),
          mathPlugin(),
          emojiPlugin(),
          imagePlugin(),
        ],
      },
    ).then((blob) => {
      const url = URL.createObjectURL(blob as Blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "my-document.docx";
      link.click();
      URL.revokeObjectURL(url);
      setLoading(false);
    });
  };

  // console.log(docxProcessor.processSync(md));

  const code: { filename: string; code: string }[] = [
    { filename: "sample.md", code: md },
    { filename: "MDAST", code: JSON.stringify(mdast, null, 2) },
    { filename: "demo.tsx", code: demoCode },
  ];
  return (
    <div className={styles.demo}>
      <h1>MDAST (Markdown Abstract Syntax Tree) to DOCX</h1>
      <button
        className={styles.btn}
        disabled={loading}
        onClick={downloadDocx}
        type="button"
      >
        {loading ? "Downloading..." : "Download as DOCX"}
      </button>
      <CodeDisplay code={code} />
      {/* <pre>{JSON.stringify(mdast, null, 2)}</pre> */}
    </div>
  );
}
