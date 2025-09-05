"use client"

import { useState } from "react"
import Link from "next/link"
import { docNavItems } from "./nav-items"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        className="inline-flex items-center rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground hover:bg-muted"
        aria-expanded={open}
        aria-controls="jy-mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
      </button>

      {open ? (
        <nav id="jy-mobile-nav" className="mt-2 overflow-hidden rounded-md border border-border bg-background">
          <ul className="p-2">
            {docNavItems.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="block rounded px-3 py-2 text-sm text-foreground hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}
