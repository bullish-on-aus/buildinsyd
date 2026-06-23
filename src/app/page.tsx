import fs from "node:fs";
import path from "node:path";

// The fully-rendered DOM captured from the original Notion-published site,
// with image URLs rewritten to locally-mirrored assets. Read at build time
// so the page is statically generated.
const content = fs.readFileSync(
  path.join(process.cwd(), "src/content/page.html"),
  "utf8",
);

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
