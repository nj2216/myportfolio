"use client";
import Image from 'next/image';

export default function MedHero() {
    return (
        <section className="mb-20 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-12">
                    {/* Hero Image - Replace placeholder-hero.png with your actual hero image */}
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
                        <Image
                            src="/images/medplay/hero-dashboard.png"
                            alt="Medplay Music Player Dashboard"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold h-16 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Medplay Music Player
                    </h1>
                    <p className="text-xl leading-relaxed mb-8 text-gray-300">
                        An ad-free modern music player built with Flask and modern web technologies. 
                        Experience seamless music playback with features like playlist management, 
                        theme customization, and song downloads - all in a responsive and user-friendly interface.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a 
                            href="https://github.com/gowtham-2321/Medplay-UI-v2" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors"
                        >
                            View on GitHub
                        </a>
                        <a 
                            href="https://medplay.vercel.app" 
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
