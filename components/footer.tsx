import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 py-6 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} | Built with Next.js & Tailwind</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/njeeevan2216" className="text-gray-400 hover:text-primary transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/nj2216" className="text-gray-400 hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link href="https://drive.google.com/file/d/19HfU_rwsJ7O5xBhpKJmY0g5Zbzw6Tsor/view?usp=sharing" className="text-gray-400 hover:text-primary transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </footer>
    )
}