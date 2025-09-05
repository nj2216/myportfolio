export type LicenseInfo = {
  slug: string
  name: string
  description: string
  whenToChoose: string[]
}

export const licenses: LicenseInfo[] = [
  {
    slug: "mit",
    name: "MIT",
    description: "Permissive license allowing reuse with attribution. Simple and widely adopted.",
    whenToChoose: ["default for open-source libraries", "broad reuse with minimal restrictions"],
  },
  {
    slug: "apache-2.0",
    name: "Apache 2.0",
    description: "Permissive license with explicit patent grants and contribution terms.",
    whenToChoose: ["corporate use", "projects with patent considerations"],
  },
  {
    slug: "gpl-3.0",
    name: "GPL-3.0",
    description: "Strong copyleft license requiring derivatives to remain open-source under GPL.",
    whenToChoose: ["ensure improvements remain open", "applications that can share source"],
  },
  {
    slug: "bsd-2-clause",
    name: "BSD 2-Clause",
    description: "Permissive license with minimal conditions on redistribution.",
    whenToChoose: ["academia and research", "simple permissive license with attribution"],
  },
  {
    slug: "bsd-3-clause",
    name: "BSD 3-Clause",
    description: "Permissive license similar to BSD-2 but with non-endorsement clause.",
    whenToChoose: ["research and education", "when attribution is required but no endorsement"],
  },
  {
    slug: "mpl-2.0",
    name: "MPL-2.0",
    description: "File-level copyleft license. Modified files must remain open, but can be combined with proprietary code.",
    whenToChoose: ["projects mixing open-source and proprietary code", "Mozilla ecosystem compatibility"],
  },
  {
    slug: "lgpl-3.0",
    name: "LGPL-3.0",
    description: "Weak copyleft license for libraries, allowing linking from proprietary software.",
    whenToChoose: ["open-source libraries usable in closed-source apps", "want modifications to remain open"],
  },
  {
    slug: "unlicense",
    name: "Unlicense",
    description: "Public domain dedication with no conditions.",
    whenToChoose: ["public domain dedication", "no attribution required"],
  },
  {
    slug: "cc0-1.0",
    name: "CC0-1.0",
    description: "Creative Commons public domain dedication with waiver of rights.",
    whenToChoose: ["data sets", "artwork, creative works", "public domain dedication"],
  },
];


export function getLicense(slug: string) {
  return licenses.find((l) => l.slug === slug)
}
