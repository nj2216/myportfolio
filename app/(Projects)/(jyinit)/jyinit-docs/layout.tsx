import type { ReactNode } from "react"
import Link from "next/link"
import { DocsSidebar } from "@/components/docs/sidebar"
import { DocsSearch } from "@/components/docs/search"
import { MobileNav } from "@/components/docs/mobile-nav"
import { Suspense } from "react"
import "./styles.css"

export default function JyinitDocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
      {/* Top header with search and mobile menu */}
      <header className="sticky top-0 z-10 -mx-4 border-b bg-background/80 px-4 py-4 backdrop-blur md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <MobileNav />
            <Link href="/jyinit-docs" className="text-balance text-lg font-semibold">
              jyinit Documentation
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Suspense fallback={<div>Loading...</div>}>
              <DocsSearch />
            </Suspense>
            <Link
            href="https://pypi.org/project/jyinit/"
            target="_blank"
            className="px-6 py-1 rounded-2xl font-[monospace] bg-emerald-600/70 text-center text-foreground hover:bg-emerald-400 transition"
            >
            View on PyPI
            </Link>
            {/* Theme toggle in header actions */}
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-8 py-8 md:flex-row md:gap-12">
        {/* Sidebar hidden on mobile; use MobileNav instead */}
        <aside className="hidden md:block md:w-64 md:flex-shrink-0">
          <Suspense fallback={<div>Loading...</div>}>
          <div className="sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto pb-10">
            <DocsSidebar />
          </div>
          </Suspense>
        </aside>

        <section className="min-w-0 flex-1">
          <article className="space-y-6">{children}</article>
        </section>
      </div>
    </main>
  )
}
