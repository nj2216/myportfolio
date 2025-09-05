"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { navItems, searchIndex } from "./nav-data"
import { ThemeToggle } from "@/components/docs/theme-toggle"

export function Topbar() {
  const [q, setQ] = useState("")
  const [openMenu, setOpenMenu] = useState(false)

  const results = useMemo(() => {
    if (!q.trim()) return []
    const qq = q.toLowerCase()
    return searchIndex
      .filter(
        (i) =>
          i.title.toLowerCase().includes(qq) ||
          i.description.toLowerCase().includes(qq) ||
          i.keywords.join(" ").toLowerCase().includes(qq),
      )
      .slice(0, 6)
  }, [q])

  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center rounded border border-border bg-background px-2 py-1 text-xs text-foreground hover:bg-muted md:hidden"
            aria-expanded={openMenu}
            aria-controls="mobile-nav"
            onClick={() => setOpenMenu((v) => !v)}
          >
            Menu
          </button>
          <Link href="/jyinit-docs" className="font-medium text-foreground">
            jyinit docs
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full max-w-xs">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search docs…"
              className="w-full rounded border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search documentation"
            />
            {q && results.length > 0 ? (
              <div
                className="absolute left-0 right-0 top-10 z-20 overflow-hidden rounded border border-border bg-background shadow-lg"
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
                    <div className="font-medium text-foreground">{r.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2">{r.description}</div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile dropdown */}
      {openMenu ? (
        <nav id="mobile-nav" className="border-t bg-background md:hidden">
          <ul className="mx-auto max-w-6xl p-2">
            {navItems.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted"
                  onClick={() => setOpenMenu(false)}
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
