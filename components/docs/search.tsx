"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { docNavItems } from "./nav-items"

const descriptions: Record<string, string> = {
  "/jyinit-docs": "What jyinit is and why it exists.",
  "/jyinit-docs/installation": "Install from PyPI (pip/pipx) or locally.",
  "/jyinit-docs/usage": "Create commands, flags, and interactive mode.",
  "/jyinit-docs/templates": "Available templates and what they include.",
  "/jyinit-docs/license": "Default license and how to choose another.",
  "/jyinit-docs/cli-reference": "All CLI arguments and options.",
}

export function DocsSearch() {
  const [q, setQ] = useState("")
  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return []
    return docNavItems
      .filter((item) => {
        const desc = descriptions[item.href] || ""
        return (
          item.title.toLowerCase().includes(term) ||
          item.href.toLowerCase().includes(term) ||
          desc.toLowerCase().includes(term)
        )
      })
      .slice(0, 6)
  }, [q])

  return (
    <div className="relative w-full max-w-xs">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search docs…"
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Search documentation"
      />
      {q && results.length > 0 ? (
        <div
          className="absolute left-0 right-0 top-10 z-20 overflow-hidden rounded-md border border-border bg-background shadow"
          role="listbox"
          aria-label="Search results"
        >
          {results.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="block px-3 py-2 text-sm hover:bg-muted"
              onClick={() => setQ("")}
            >
              <div className="font-medium">{r.title}</div>
              <div className="text-xs text-muted-foreground line-clamp-2">{descriptions[r.href]}</div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
