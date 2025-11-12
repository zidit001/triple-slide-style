import { useState } from "react";

interface HeaderProps {
  onDonateClick: () => void;
}

export const Header = ({ onDonateClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-kdu-gradient shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-2xl font-bold">KDU Florida Inc</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-white">
            <li>
              <button onClick={() => scrollToSection("about")} className="hover:opacity-80 transition-opacity">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("mission")} className="hover:opacity-80 transition-opacity">
                Mission
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="hover:opacity-80 transition-opacity">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("events")} className="hover:opacity-80 transition-opacity">
                Events
              </button>
            </li>
            <li>
              <button onClick={onDonateClick} className="hover:opacity-80 transition-opacity">
                Donate
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden pb-4 space-y-2 text-white">
            <li>
              <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 hover:opacity-80">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("mission")} className="block w-full text-left py-2 hover:opacity-80">
                Mission
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")} className="block w-full text-left py-2 hover:opacity-80">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("events")} className="block w-full text-left py-2 hover:opacity-80">
                Events
              </button>
            </li>
            <li>
              <button onClick={onDonateClick} className="block w-full text-left py-2 hover:opacity-80">
                Donate
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
