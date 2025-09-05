import { CodeBlock } from "@/components/docs/code-block"
import Link from "next/link"
import { licenses } from "@/lib/jyinit-licenses"
import { H2 } from "@/components/docs/anchor-heading"

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-pretty text-emerald-600 text-3xl font-bold">License</h1>
      <p className="leading-relaxed">
        By default, jyinit uses the MIT license for broad permissive use. You can choose a different license during
        interactive setup or with the <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-100">--license</span> flag.
      </p>
      
      <H2>Choose a license via CLI</H2>
      <CodeBlock
        title="License Examples"
        code={`# MIT (default)
jyinit create my-app --license MIT

# Apache 2.0
jyinit create my-app --license Apache-2.0

# GPLv3
jyinit create my-app --license GPL-3.0`}
        language="bash"
        label="bash"
      />

      <p className="leading-relaxed">
        The selected license file is added to your project root and referenced in packaging metadata where applicable.
      </p>

      <H2>Common licenses</H2>
      <div className="grid gap-4 md:grid-cols-2">
        {licenses.map((l) => (
          <div key={l.slug} className="rounded-lg hover:bg-emerald-50 transition-colors border p-4 hoverable">
            <h3 className="font-semibold">
              <Link href={`/jyinit-docs/license/${l.slug}`} className="text-emerald-600 hover:underline">
                {l.name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">{l.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
