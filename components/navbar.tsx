import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faFileAlt, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
  title?: string;
  target?: string;
};

export default function Navbar({ title = "MyPortfolio", target = "#" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`text-white py-4 fixed w-full transition-colors duration-300 ${scrolled || menuOpen ? "bg-gray-950" : "bg-transparent"}`} style={{ zIndex: 100 }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href={target} className="text-4xl font-bold">{title}</a>
        <div className="hidden md:flex space-x-4">
          <Link href="/#" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link href="https://linkedin.com/in/nj2216" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Link>
          <Link href="https://github.com/nj2216" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faGithub} /> Github
          </Link>
          <Link href="mailto:njeevan2216@gmail.com" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </Link>
          <Link href="https://drive.google.com/file/d/19HfU_rwsJ7O5xBhpKJmY0g5Zbzw6Tsor/view?usp=sharing" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </Link>
        </div>
        <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <FontAwesomeIcon icon={!menuOpen ? faBars: faClose} /> {/* Menu icon */}
            </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-left space-y-4 mt-4 bg-gray-950 p-4 rounded-lg">
          <Link href="/#" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link href="https://linkedin.com/in/nj2216" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Link>
          <Link href="https://github.com/nj2216" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faGithub} /> Github
          </Link>
          <Link href="mailto:njeevan2216@gmail.com" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faEnvelope} /> Mail
          </Link>
          <Link href="https://drive.google.com/file/d/19HfU_rwsJ7O5xBhpKJmY0g5Zbzw6Tsor/view?usp=sharing" target="_blank" className="hover:text-primary transition-colors">
            <FontAwesomeIcon icon={faFileAlt} /> Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
