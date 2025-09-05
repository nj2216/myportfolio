"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { docNavItems } from "./nav-items"
import { cn } from "@/lib/utils"

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <nav role="navigation" aria-label="Documentation sections" className="space-y-1">
      {docNavItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/jyinit-docs" && pathname.startsWith(item.href))

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "block rounded-md px-3 py-2 text-sm transition-colors",
              isActive ? "bg-emerald-600/80 text-white font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}
