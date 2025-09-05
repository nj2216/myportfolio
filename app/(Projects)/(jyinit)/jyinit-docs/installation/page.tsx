import { CodeBlock } from "@/components/docs/code-block"
import { H2 } from "@/components/docs/anchor-heading"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">Installation</h1>

      <H2>From PyPI (recommended)</H2>
      <p className="leading-relaxed">Install globally with pipx for an isolated, runnable CLI:</p>
      <CodeBlock title="Installing Globally" code={"pipx install jyinit"} language="bash" label="bash" />

      <p className="leading-relaxed">Or install into your current environment with pip:</p>
      <CodeBlock title="Installing in Current Environment" code={"pip install jyinit"} language="bash" label="bash" />

      <H2>Local (from source)</H2>
      <ol className="list-decimal pl-6 leading-relaxed">
        <li>Clone the repository</li>
        <li>Enter the project directory</li>
        <li>Install in editable mode</li>
      </ol>
      <CodeBlock
        title="Installing from Source Code (for Contributors)"
        code={`git clone https://github.com/nj2216/jyinit.git
cd jyinit
pip install -e .`}
        language="bash"
        label="bash"
      />

      <H2>Requirements</H2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>Python 3.9+ recommended</li>
        <li>git installed (for repo initialization)</li>
        <li>Optional: pipx for global CLI isolation</li>
      </ul>
    </div>
  )
}
