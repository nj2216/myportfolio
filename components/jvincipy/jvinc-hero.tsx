"use client";
import Image from 'next/image';
import Link from 'next/link';
import GlitchText from '../glitch-text';

export default function JvHero() {
    return (
        <section className="mb-20 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12">
                    {/* Hero Image - Replace placeholder-hero.png with your actual hero image */}
                    <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-2">
                        <Image
                            src="/images/jvincipy/thumbnail.png"
                            alt="jvinvipy PyPI Project Page"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <GlitchText txt="$ pwd → nj2216/jvincipy"/>
                    <h1 className="text-2xl font-bold h-8 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-white">
                        jvincipy — Python DSL for HTML
                    </h1>
                    <p className="text-xl leading-relaxed mb-4 text-gray-300">
            Build HTML and CSS programmatically in Python. Minimal, dependency-free, and designed for developers who love expressive code.

                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                        href="https://pypi.org/project/jvincipy/"
                        target="_blank"
                        className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
                        >
                        View on PyPI
                        </Link>
                        <Link
                        href="https://github.com/nj2216/jvincipy"
                        target="_blank"
                        className="px-6 py-3 rounded-xl border border-emerald-500 text-emerald-400 hover:text-emerald-300 hover:border-emerald-300 transition"
                        >
                        GitHub Repo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
