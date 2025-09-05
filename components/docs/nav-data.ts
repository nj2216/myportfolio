export type NavItem = {
  title: string
  href: string
  description?: string
  keywords?: string[]
}

export const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/jyinit-docs",
    description: "jyinit is a tiny, fast initializer to scaffold Python projects consistently.",
    keywords: ["intro", "python", "scaffold", "starter", "bootstrap"],
  },
  {
    title: "Installation",
    href: "/jyinit-docs/installation",
    description: "Install from PyPI (pip/pipx) or locally in editable mode.",
    keywords: ["pip", "pipx", "pypi", "install", "editable"],
  },
  {
    title: "Usage",
    href: "/jyinit-docs/usage",
    description: "Create projects, use flags, or run interactive mode.",
    keywords: ["create", "examples", "interactive", "flags"],
  },
  {
    title: "Templates",
    href: "/jyinit-docs/templates",
    description: "Available templates with a short description of what they include.",
    keywords: ["template", "boilerplate", "starter"],
  },
  {
    title: "License",
    href: "/jyinit-docs/license",
    description: "Default license and how to choose a different one.",
    keywords: ["license", "mit", "apache", "gpl"],
  },
  {
    title: "CLI Reference",
    href: "/jyinit-docs/cli-reference",
    description: "All CLI arguments and options.",
    keywords: ["cli", "reference", "help", "options", "flags"],
  },
]

// Small search index (title + description + keywords)
export const searchIndex = navItems.map(({ title, href, description, keywords }) => ({
  title,
  href,
  description: description || "",
  keywords: keywords || [],
}))
