import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";

export default function Home() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "src/content/guide.md"),
    "utf-8"
  );

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 prose dark:prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
