import type React from "react"

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
}

export function H2({ children }: { children: React.ReactNode }) {
  const id = slugify(String(children))
  return (
    <h2 id={id} className="group scroll-mt-24 text-xl md:text-2xl font-semibold tracking-tight text-foreground">
      <a href={`#${id}`} className="no-underline hover:underline underline-offset-4">
        {children}
      </a>
    </h2>
  )
}

export function H3({ children }: { children: React.ReactNode }) {
  const id = slugify(String(children))
  return (
    <h3 id={id} className="group scroll-mt-24 text-lg md:text-xl font-semibold tracking-tight text-foreground">
      <a href={`#${id}`} className="no-underline hover:underline underline-offset-3">
        {children}
      </a>
    </h3>
  )
}
