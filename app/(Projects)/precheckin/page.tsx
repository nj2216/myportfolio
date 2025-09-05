"use client";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import ImagePreview from "@/components/image-preview";
import PreHero from "@/components/precheckin/pre-hero";

// Import MatrixBackground with no SSR
const MatrixBackground = dynamic(() => import("@/components/matrix-background"), { ssr: false });

const stats = [
  { label: "PHCs in India", value: "25K+" },
  { label: "Monthly Consultations", value: "7.5M+" },
  { label: "Adoption Growth", value: "20% YoY" },
  { label: "Pilot Phase", value: "FREE" },
];

export default function PreCheckin() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <MatrixBackground color="#22c55e" />
      <Navbar title="PreCheckin - Jeevan N" />
      <main className="container mx-auto px-4 py-10 relative z-10">
        {/* Hero */}

        <PreHero />

        {/* Metrics */}
        <div className="relative overflow-hidden max-w-5xl mx-auto mt-16 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-6 md:p-10">
          <h3 className="text-3xl font-bold mb-3 text-emerald-400">Market</h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-6 text-center hover:border-emerald-500/30 transition-colors"
              >
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
            Key Features
          </h2>

          {/* Showcase 1 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <ImagePreview src="/images/precheckin/feature_1.png" alt="AI Questioning" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">
                AI-Powered Symptom Collection
              </h3>
              {[
                "AI generates symptom-specific follow-up questions",
                "Structured pre-consultation form",
                "Patients don’t forget key details",
                "Faster & more accurate consultations",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-500">•</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Showcase 2 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center md:[&>*:first-child]:order-2">
            <ImagePreview src="/images/precheckin/feature_2.png" alt="Queue System" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">
                Integrated with PHC Workflow
              </h3>
              {[
                "Token-based patient queuing system",
                "Lightweight design for low infrastructure",
                "Rural-friendly workflow support",
                "Doctor sees pre-filled patient details instantly",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-500">•</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Showcase 3 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <ImagePreview src="/images/precheckin/responsive.png" alt="Responsive Design" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Responsive Design</h3>
              <p className="text-zinc-400">
                PreCheckin adapts to desktops, tablets, and mobiles. Built for rural accessibility
                with simple, intuitive interfaces.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Backend</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Flask Framework</li>
                <li>• SQLite Database</li>
                <li>• Together AI LLM Integration</li>
                <li>• Token Queue System</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Frontend</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Responsive WebApp</li>
                <li>• Lightweight UI for low bandwidth</li>
                <li>• Optimized for rural clinics</li>
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
            <span>← Back to Portfolio</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
