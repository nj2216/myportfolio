import { CodeBlock } from "@/components/docs/code-block"
import { H2 } from "@/components/docs/anchor-heading"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">Usage</h1>

      <H2>Create a new project (interactive)</H2>
      <p className="leading-relaxed">Run without flags to enter interactive mode and answer prompts:</p>
      <CodeBlock title="Interactive Example" code={"jyinit create my-cool-app --interactive"} language="bash" label="bash" />

      <H2>Create a new project (non-interactive)</H2>
      <p className="leading-relaxed">Pass flags to fully automate project creation:</p>
      <CodeBlock
      title="Non-Interactive Example"
        code={`jyinit create my-cool-app \\
  --type package \\
  --license MIT \\
  --ci \\
  --gitrep "https://github.com/your-org/my-cool-app" \\
  --author "Jane Doe" \\
  --description "Example package initialized with jyinit"`}
        language="bash"
        label="bash"
      />

      <H2>Flags (common)</H2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--type</span> → Template type to use (e.g., <em>python-package</em>,{" "}
          <em>fastapi-service</em>, <em>cli-tool</em>)
        </li>
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--license</span> → Project license (e.g., <em>MIT</em>, <em>Apache-2.0</em>,{" "}
          <em>GPL-3.0</em>)
        </li>
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--ci</span> → CI provider to enable (e.g., <em>github</em>, <em>gitlab</em>,{" "}
          <em>none</em>)
        </li>
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--git</span> → Initialize a git repository
        </li>
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--gitrep</span> → Remote git repository URL (initializes and sets origin)
        </li>

        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--author</span> → Author name
        </li>
      </ul>
    </div>
  )
}
