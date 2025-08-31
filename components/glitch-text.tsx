"use client";

import { useState, useEffect } from "react";

type GlitchTextProps = {
    txt : string;
};

export default function GlitchText( { txt } : GlitchTextProps ) {

    const [text, setText] = useState("")
    const fullText = txt

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
            setText(fullText.substring(0, currentIndex))
            currentIndex++
        } else {
            clearInterval(interval)
        }
        }, 100)

        return () => clearInterval(interval)
    }, [])


    return (
        <>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glitch-text">
                    <span className="relative whitespace-nowrap">
                        {text}
                        <span className="absolute top-0 left-0 w-1 h-full bg-primary animate-blink"></span>
                    </span>
            </h1>
        </>
    )
}