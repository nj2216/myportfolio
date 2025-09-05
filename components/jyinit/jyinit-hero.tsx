"use client";
import Image from 'next/image';
import Link from 'next/link';
import GlitchText from '@/components/glitch-text';

export default function JyinitHero() {
    return (
        <section className="mb-2 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12">
                    {/* Hero Image */}
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
                        <Image
                            src="/images/jyinit/hero-dashboard.png"
                            alt="jyinit CLI Tool Showcase"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <GlitchText txt="$ pwd → nj2216/jyinit" />
                    <h3 className="text-2xl font-bold h-8 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        jyinit Project Scaffolder
                    </h3>
                    <p className="text-xl leading-relaxed mb-8 text-gray-300">
                        A modern Python project scaffolding tool with support for multiple templates, 
                        licenses, CI workflows, git repo initialization, and interactive mode. 
                        Boost your productivity by generating ready-to-use project structures instantly.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a 
                            href="https://github.com/nj2216/jyinit" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
                        >
                            View on GitHub
                        </a>
                        <Link
                        href="/jyinit-docs"
                        target="_blank"
                        className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
                        >
                        See Documentation
                        </Link>
                        <a 
                            href="https://pypi.org/project/jyinit/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                        >
                            PyPI Package
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
