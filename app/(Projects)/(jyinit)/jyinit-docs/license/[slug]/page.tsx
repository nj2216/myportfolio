import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"
import { getLicense, licenses } from "@/lib/jyinit-licenses"

export function generateStaticParams() {
  return licenses.map((l) => ({ slug: l.slug }))
}

export default function LicenseDetailPage({ params }: { params: { slug: string } }) {
  const lic = getLicense(params.slug)

  if (!lic) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">License not found</h1>
        <Link href="/jyinit-docs/license" className="mt-4 inline-block text-emerald-600 hover:underline">
          Back to License
        </Link>
      </main>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">{lic.name}</h1>
      <p className="leading-relaxed text-gray-700">{lic.description}</p>

      <h2 className="text-xl font-semibold">Choose this license when</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {lic.whenToChoose.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">CLI usage</h2>
      <CodeBlock
        code={`# choose ${lic.name}
jyinit create my-app --license ${lic.name}

# interactive mode => you will be allowed to choose the LICENSE in interactive mode too
jyinit create create my-app --interactive `}
        language="bash"
        label="bash"
      />

      <div className="pt-2">
        <Link href="/jyinit-docs/license" className="text-emerald-600 hover:underline">
          ← Back to License
        </Link>
      </div>
    </div>
  )
}
