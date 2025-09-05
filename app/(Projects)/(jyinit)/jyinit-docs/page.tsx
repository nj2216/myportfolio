import { H2, H3 } from "@/components/docs/anchor-heading"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">Overview</h1>
      <p className="leading-relaxed text-justify">
        jyinit is a fast Python project initializer for creating consistent, ready-to-ship project structures from
        curated templates. It streamlines bootstrapping with sensible defaults, optional CI, license setup, git
        repository initialization, and interactive flows so you can start coding immediately.
      </p>

      <H2>Key features</H2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li> <strong>Multiple templates</strong>: Flask, FastAPI, Django, Streamlit, ML, libraries, etc.</li>
        <li><strong>Interactive mode</strong> <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--interactive</span>: prompts for missing options.</li>
        <li><strong>Per-template GitHub Actions workflows</strong> (`--ci`).</li>
        <li><strong>Licenses included</strong> (MIT, Apache-2.0, GPL-3.0, …).</li>
        <li><strong>Git integration</strong>:  </li>
        <li> <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--git </span> → initializes git repo(s).  </li>
        <li> <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--gitrep [url] </span> → initializes repo(s) + sets a remote & pushes commit.</li>
        <li><strong>Tests scaffold</strong>: adds a <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">tests/</span> folder with `__init__.py`.</li>
        <li><strong>Virtual environments</strong> (<span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--venv</span>) per subproject.</li>
        <li><strong>Dry-run mode</strong>: preview without creating files</li>
      </ul>

      <p className="leading-relaxed">
        Continue with Installation to get jyinit, or see Usage for common commands. For a full list of options, visit
        the CLI Reference.
      </p>
      <br></br>
      <h1 className="text-pretty text-gray-600 text-3xl font-bold">Why Use jyinit?</h1>

      <H3>Quick Start</H3>
      <span className="leading-relaxed">
        Create new Python projects in seconds with minimal setup.
      </span>

      <H3>Interactive Scaffolding</H3>
      <span className="leading-relaxed">
        Use <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--interactive</span> to be guided through templates, licenses, and options.
      </span>

      <H3>Production-Ready Templates</H3>
      <span className="leading-relaxed">
        Scaffold Flask, FastAPI, Django, ML, libraries, and more with best practices included.
      </span>

      <H3>One-Command Setup</H3>
      <span className="leading-relaxed">
        Initialize git, add a license, set up environments, and scaffold code in one step.
      </span>

      <H3>Flexible & Extensible</H3>
      <span className="leading-relaxed">
        Supports single projects and monorepos; extend with your own templates.
      </span>
    </div>
  )
}
