import { CodeBlock } from "@/components/docs/code-block"
import { H2 } from "@/components/docs/anchor-heading"

  type OptionProps = {
    name: string
    description: string
  }

  const Options: OptionProps[] = [
  {
    name: "--type",
    description: "Legacy: single template scaffold",
  },
  {
    name: "--types",
    description: "One or more templates (library, flask, fastapi, django, …)",
  },
  {
    name: "--dir",
    description: "Base directory for project",
  },
  {
    name: "--license",
    description: "Choose license (default: MIT)",
  },
  {
    name: "--author",
    description: "Author name (defaults to system user)",
  },
  {
    name: "--py",
    description: "Minimum Python version (default: 3.8)",
  },
  {
    name: "--git",
    description: "Initialize git (no remote)",
  },
  {
    name: "--gitrep [url]",
    description: "Init git + set optional remote & push",
  },
  {
    name: "--venv",
    description: "Create .venv per subproject",
  },
  {
    name: "--no-tests",
    description: "Skip creating tests/ folder",
  },
  {
    name: "--ci",
    description: "Add tailored GitHub Actions workflow",
  },
  {
    name: "--interactive",
    description: "Prompt for missing values",
  },
  {
    name: "--dry-run",
    description: "Preview without writing files",
  },
];


function Option({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="rounded-md border hover:bg-emerald-50 p-3 transition-colors hoverable">
      <div className="text-sm font-mono">{name}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">CLI Reference</h1>
      
            <H2>Examples</H2>
      <CodeBlock
        code={`# Fast non-interactive setup with CI and remote origin
jyinit create my-lib --type python-package --ci github --gitrep "https://github.com/you/my-lib" --yes

# Interactive creation in current directory
jyinit create my-lib --interactive`}
        language="bash"
        label="bash"
      />

      <H2>Commands</H2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">jyinit create [name]</span> — Create a new project with <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">name</span> inside a new folder - <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">name</span>
        </li>
        <li>
         <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">jyinit list-templates</span> — List available templates
        </li>
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">jyinit --version</span> — Show version
        </li>
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">jyinit --help</span> — Show help
        </li>
        <li>
          <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">jyinit create --help</span> — Show help for create option
        </li>
      </ul>

      <H2>Options and Flags</H2>
      <div className="grid gap-3">
        {Options.map((opt) => (
          <Option key={opt.name} name={opt.name} desc={opt.description} />
        ))}
      </div>


    </div>
  )
}
