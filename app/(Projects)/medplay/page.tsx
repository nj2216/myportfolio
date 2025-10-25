"use client";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import MedHero from "@/components/medplay/med-hero";
import Link from "next/link";
// import Image from "next/image";
import ImagePreview from "@/components/image-preview";
import Particles from "@/components/reactbits/particlesback";


// Import MatrixBackground with no SSR to avoid hydration issues
// const MatrixBackground = dynamic(() => import("@/components/matrix-background"), { ssr: false });

  const stats = [
    { label: "Monthly Active Sessions", value: "6.8K" },
    { label: "Total songs Listened", value: "417K+" },
    { label: "Lines of Code", value: "8.6K" },
    { label: "For all users", value: "FREE" },
  ]

export default function Medplay() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* <MatrixBackground color="#f00"/> */}

      <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
        <Particles
          particleColors={['#34D399', '#34D399']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar title="Medplay - Jeevan N" />
      <main className="container mx-auto px-4 py-10 relative z-10">
        <MedHero />
        <div className="relative overflow-hidden max-w-5xl mx-auto rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950 p-6 md:p-10">
        <h3 className="text-3xl font-bold mb-3 text-emerald-400">Metrics</h3>
        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
            <div
                key={s.label}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-6 text-center hover:border-emerald-500/30 transition-colors hoverable"
            >
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{s.label}</div>
            </div>
            ))}
            </div>
        </div>

        {/* Features Section */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl h-12 font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
            Key Features
          </h2>

          {/* Feature Showcase 1 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <ImagePreview src="/images/medplay/feature_1.png" alt="Search and Player" />
            <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-3 text-emerald-400">Effortless Music Discovery & Control</h3>
              {[
                "Advanced Music Playback Controls",
                "Real-time Search Results",
                "Intuitive Player Interface",
                "Equilizer integration for Audiophiles",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-500">•</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Showcase 2 */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center md:[&>*:first-child]:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
                <ImagePreview src="/images/medplay/feature_2.png" alt="Playlist Management" />
            </div>
            
            <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-3 text-emerald-400">Seamless Music Experience</h3>
              {[
                "Favorites Management System",
                "Dynamic Queue Management",
                "Multiple Theme Support",
                "MP3 Downloads with Metadata",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3 text-zinc-300">
                  <span className="text-emerald-500">•</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Showcase */}
          <div className="mb-20 grid gap-6 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
                <ImagePreview src="/images/medplay/responsive.png" alt="Responsive Design" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-emerald-400">Responsive Design</h3>
              <p className="text-zinc-400">
                Medplay adapts seamlessly to all screen sizes, providing an optimal viewing and
                interaction experience across desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Backend</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Flask Framework</li>
                <li>• Python Virtual Environment</li>
                <li>• FFmpeg Integration</li>
                <li>• ID3 Writer for Metadata</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Frontend</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• HTML5 & CSS3</li>
                <li>• Modern JavaScript</li>
                <li>• Font Awesome Icons</li>
                <li>• Google Fonts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Installation & Setup */}
        <section className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white">
            Installation & Setup
          </h2>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            <div className="space-y-8 text-zinc-300">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">Quick Start</h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Clone the repository and navigate to project directory</li>
                  <li>Create and activate Python virtual environment</li>
                  <li>Install dependencies using requirements.txt</li>
                  <li>Run the application using python app.py</li>
                  <li>Access the application at http://127.0.0.1:5000</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">Key Dependencies</h3>
                <ul className="space-y-2">
                  <li>• Flask for backend server</li>
                  <li>• FFmpeg for audio processing</li>
                  <li>• ID3 Writer for metadata management</li>
                  <li>• JioSaavn API integration</li>
                </ul>
              </div>
            </div>
          </div>
          
        </section>

        {/* Back link */}
        <div className="text-center mt-20">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <span>← Back to Portfolio</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
