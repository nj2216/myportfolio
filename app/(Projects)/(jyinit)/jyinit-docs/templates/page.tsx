import { CodeBlock } from "@/components/docs/code-block"
import Link from "next/link"
import { templates } from "@/lib/jyinit-templates"
import { H2 } from "@/components/docs/anchor-heading"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">Templates</h1>
      <p className="leading-relaxed">
        Templates define the initial structure, configuration, and tooling of your project. Choose the one that best
        matches your use case.
      </p>

      <H2>List available templates (CLI)</H2>
      <CodeBlock title="Listing Templates" code={"jyinit list-templates"} language="bash" label="bash" />

      <p className="leading-relaxed">
        Use <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--type</span> during creation to select one of the available templates:
      </p>
      <CodeBlock title="Using Templates" code={"jyinit create my-app --type <template-name>"} language="bash" label="bash" />


      <H2>Available templates</H2>
      <p className="leading-relaxed">The list below is a common starting set - your installation may include more or fewer.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {templates.map((t) => (
          <div key={t.slug} className="rounded-lg emerald border p-4 hover:bg-emerald-50 transition-colors hoverable ">
            <h3 className="font-semibold">
              <Link href={`/jyinit-docs/templates/${t.slug}`} className="text-emerald-600 hover:underline">
                {t.name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
