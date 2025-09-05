"use client";
import Image from 'next/image';
import GlitchText from '@/components/glitch-text';

export default function PreHero() {
    return (
        <section className="mb-2 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12">
                    {/* Hero Image - Replace with actual dashboard screenshot */}
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
                        <Image
                            src="/images/precheckin/hero-dashboard.png"
                            alt="PreCheckin WebApp Dashboard"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <GlitchText txt="$ pwd → nj2216/precheckin" />
                    <h3 className="text-2xl font-bold h-8 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                        PreCheckin – AI-Powered Pre-Consultation Platform
                    </h3>
                    <p className="text-xl leading-relaxed mb-8 text-gray-300">
                        A responsive web platform for Primary Health Centres (PHCs) and government clinics. 
                        Patients enter symptoms before appointments, while AI generates follow-up questions 
                        and shares structured data with doctors—reducing consultation time and improving diagnosis accuracy.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a 
                            href="https://github.com/njeevan2216/precheckin" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors"
                        >
                            View on GitHub
                        </a>
                        <a 
                            href="https://precheck-in-tutedude.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
