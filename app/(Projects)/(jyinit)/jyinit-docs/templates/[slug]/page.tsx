import Link from "next/link"
import { getTemplate, templates } from "@/lib/jyinit-templates"
import { CodeBlock } from "@/components/docs/code-block"

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }))
}

export default function TemplateDetailPage({ params }: { params: { slug: string } }) {
  const tpl = getTemplate(params.slug)

  if (!tpl) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Template not found</h1>
        <Link href="/jyinit-docs/templates" className="mt-4 inline-block text-emerald-600 hover:underline">
          ← Back to Templates
        </Link>
      </main>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">{tpl.name}</h1>
      <p className="leading-relaxed text-gray-700">{tpl.description}</p>

      <h2 className="text-xl font-semibold">Create this template</h2>
      <CodeBlock
        code={`# install
pip install jyinit

# create from ${tpl.slug}
jyinit create my-project --type ${tpl.slug}

# interactive mode => you will be allowed to choose the TEMPLATE in interactive mode too
jyinit create my-project --interactive`}
        language="bash"
        label="bash"
      />

      {tpl.flags?.length ? (
        <>
          <h2 className="text-xl font-semibold">Useful flags</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {tpl.flags.map((f) => (
              <li key={f}>
                <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">{f}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {tpl.recommended?.length ? (
        <>
          <h2 className="text-xl font-semibold">Great for</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {tpl.recommended.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </>
      ) : null}

      <div className="pt-2">
        <Link href="/jyinit-docs/templates" className="text-emerald-600 hover:underline">
          ← Back to Templates
        </Link>
      </div>
    </div>
  )
}
