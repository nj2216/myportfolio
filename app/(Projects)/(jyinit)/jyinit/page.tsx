"use client";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import JyinitHero from "@/components/jyinit/jyinit-hero";
import ImagePreview from "@/components/image-preview";

// Matrix background effect
const MatrixBackground = dynamic(() => import("@/components/matrix-background"), { ssr: false });

export default function Jyinit() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <MatrixBackground color="#0ff" />
      <Navbar title="jyinit - Jeevan N" />
      <main className="container mx-auto px-4 py-10 relative z-10">
        {/* Hero Section */}
        <JyinitHero />

        {/* Features Section */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl h-12 font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
            Key Features
          </h2>

          {/* Feature 1 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <ImagePreview src="/images/jyinit/feature_interactive.png" alt="Interactive Mode" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Interactive Mode</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900"> --interactive</span> prompts for missing options</li>
                <li>• Guides you through templates, licenses, and setup</li>
                <li>• Beginner-friendly and fast</li>
              </ul>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center md:[&>*:first-child]:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <ImagePreview src="/images/jyinit/feature_templates.png" alt="CI Workflows" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Templates</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Scaffold Flask, FastAPI, Django, Streamlit, ML, libraries, and more</li>
                <li>• Supports single projects and monorepo style setups.</li>
                <li>• Automatically creates <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">tests/</span> and optional <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">.venv</span> for each template</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <ImagePreview src="/images/jyinit/feature_licenses.png" alt="Git Integration" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Licenses</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• Choose from MIT, Apache-2.0, GPL-3.0, and more</li>
                <li>• Auto-included in generated projects</li>
                <li>• Saves you the step of adding a license manually</li>
              </ul>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center md:[&>*:first-child]:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <ImagePreview src="/images/jyinit/feature_preview.png" alt="Templates & Licenses" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Preview Mode</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">--dry-run</span> shows what will be created before writing files</li>
                <li>• Lets you experiment safely</li>
                <li>• Great for understanding the project layout ahead of time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-400">Installation</h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            <pre className="bg-black/60 p-4 rounded-lg text-emerald-300 overflow-x-auto">
{`pip install jyinit`}
            </pre>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-400">Usage Examples</h2>
          <div className="grid gap-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4">Interactive Mode</h3>
              <pre className="bg-black/60 p-4 rounded-lg text-emerald-300 overflow-x-auto text-sm">
{`python jyinit.py create myproj --interactive`}
              </pre>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4">Flask App with GitHub Actions</h3>
              <pre className="bg-black/60 p-4 rounded-lg text-emerald-300 overflow-x-auto text-sm">
{`python jyinit.py create myrepo --types flask --ci --gitrep https://github.com/you/myrepo.git`}
              </pre>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4">Streamlit + MLops with Venv</h3>
              <pre className="bg-black/60 p-4 rounded-lg text-emerald-300 overflow-x-auto text-sm">
{`python jyinit.py create combo --types streamlit mlops --venv --gitrep`}
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
                <li>• Python 3.8+</li>
                <li>• argparse, pathlib, subprocess</li>
                <li>• No external dependencies</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Project Structure</h3>
              <ul className="space-y-2 text-zinc-300">
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">jyinit.py</span>— CLI entrypoint</li>
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">data/templates.json</span> — project templates</li>
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">data/licenses.json</span> — license text</li>
                <li>• <span className="font-[Consolas] rounded border border-zinc-100/50 bg-gray-900">.github/workflows/</span> — CI workflows</li>
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
