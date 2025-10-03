"use client";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import JvHero from "@/components/jvincipy/jvinc-hero";
import ImagePreview from "@/components/image-preview";
import { ImageResponse } from "next/server";

// Matrix background effect
const MatrixBackground = dynamic(() => import("@/components/matrix-background"), { ssr: false });

export default function Jvincipy() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <MatrixBackground color="#f0f"/>
      <Navbar title="jvincipy - Jeevan N" />
      <main className="container mx-auto px-4 py-10 relative z-10">
        {/* Hero Section */}
        <JvHero />

        {/* Features Section */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl h-12 font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
            Key Features
          </h2>
          
          {/* Feature 1 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
                <ImagePreview src="/images/jvincipy/feature_html.png" alt="HTML DSL" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">HTML DSL</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Full HTML5 tag coverage</li>
                <li>• SVG element support</li>
                <li>• Clean, readable rendering</li>
                <li>• `Tag` and `Markup` abstractions</li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center md:[&>*:first-child]:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
                <ImagePreview src="/images/jvincipy/feature_css.png" alt="CSS DSL" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">CSS DSL</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Python dict → CSS declarations</li>
                <li>• Nested selectors support</li>
                <li>• At-rules for media queries & keyframes</li>
                <li>• Pretty & minified render modes</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
                <ImagePreview src="/images/jvincipy/feature_cli.png" alt="CLI Tool" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">CLI Tool</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Render Python → HTML files</li>
                <li>• `--pretty` and `--minify` options</li>
                <li>• Auto-detects `page` or `render()`</li>
                <li>• Export to static HTML files</li>
              </ul>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center md:[&>*:first-child]:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
                <ImagePreview src="/images/jvincipy/feature_flask.png" alt="Flask Integration" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Flask Integration</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Serve rendered pages dynamically</li>
                <li>• Use `Markup` for safe HTML injection</li>
                <li>• Perfect for micro web projects</li>
                <li>• Dependency-free (except Flask)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation & Setup */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-400">Installation</h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            <pre className="bg-black/60 p-4 rounded-lg text-emerald-300 overflow-x-auto">
{`pip install jvincipy`}
            </pre>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-400">Usage Examples</h2>
          <div className="grid gap-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4">HTML DSL</h3>
              <pre className="bg-black/60 p-4 rounded-lg text-emerald-300 overflow-x-auto text-sm">
{`from jvincipy import div, h1, p

page = div(
    h1("Hello World!"),
    p("This page was generated using jvincipy.")
)
print(page.render(pretty=True))`}
              </pre>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4">CSS DSL</h3>
              <pre className="bg-black/60 p-4 rounded-lg text-emerald-300 overflow-x-auto text-sm">
{`from jvincipy.css import Stylesheet, Rule

sheet = Stylesheet()
sheet.rules.append(Rule('body', {'margin': 0, 'color': 'black'}))
print(sheet.rules[0].render())`}
              </pre>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-400">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Core</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Python 3</li>
                <li>• No external dependencies</li>
                <li>• Flask (only for example app)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Project Structure</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">jvincipy/core.py</span> — core logic</li>
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">jvincipy/tags.py</span> — tag factories</li>
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">jvincipy/css.py</span> — CSS DSL</li>
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">jvincipy/cli.py</span> — CLI entrypoint</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="text-center mt-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}