"use client"

import { useState } from "react"

type Props = {
  title?: string;
  code: string
  language?: string
  label?: string
}

export function CodeBlock({ title, code, language = "bash", label }: Props) {
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // ignore
    }
  }

  return (
    <div className="relative rounded-2xl border border-zinc-100 bg-emerald-100/60 pt-12 pb-2 pl-2 pr-2">
      <div className="absolute left-4 top-2 z-10 flex items-center gap-2">
        {title ? (<span className="text-xl text-foreground">{title}</span>): null}
      </div>
      <div className="absolute right-2 top-2 z-10 flex items-center gap-2"> 
        {label ? (
          <span className="rounded border border-border bg-background/80 px-2 py-0.5 text-xs text-muted-foreground">
            {label}
          </span>
        ) : null}
        <button
          onClick={onCopy}
          aria-label="Copy code"
          className={"rounded border border-border bg-background px-2 py-1 text-xs text-foreground hover:bg-muted"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="border bg-emerald-600/70 p-4 rounded-lg font-[Consolas] text-yellow-200 overflow-x-auto text-sm">
        <code className={language ? `language-${language}` : undefined}>{code}</code>
      </pre>
    </div>
  )
}
