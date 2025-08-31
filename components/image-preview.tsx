"use client" 

import { useState, useEffect } from "react"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { motion, AnimatePresence } from "framer-motion"

type ImagePreviewProps = {
    src : string | StaticImport;
    alt : string;
}

export default function ImagePreview( { src, alt } : ImagePreviewProps ) {
  const [isOpen, setIsOpen] = useState(false)

  // ESC key support
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <div
        className="cursor-pointer relative aspect-[16/8]"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-lg shadow-md hover:opacity-80 transition object-cover"
        />
      </div>

      {/* Modal with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] p-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            >
              <Image
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                className="rounded-xl object-contain max-h-[90vh]"
              />
              {/* Close Button */}
              <motion.button
                className="absolute top-3 right-3 text-white bg-black/50 rounded-full px-3 py-1"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
