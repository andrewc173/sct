import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-gradient-to-r from-[#020617] to-[#0f172a] shadow-lg' : 'bg-gradient-to-r from-[#020617] to-[#0f172a] bg-opacity-90'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white font-['Courier_New']">TJ Computer Team</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" activeClassName="text-blue-400" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="/calendar" activeClassName="text-blue-400" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Calendar</Link>
              <Link href="/lectures" activeClassName="text-blue-400" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Lectures</Link>
              <Link href="/editorials" activeClassName="text-blue-400" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Editorials</Link>
              <Link href="/leadership" activeClassName="text-blue-400" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Leadership</Link>
              <Link href="/awards" activeClassName="text-blue-400" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Awards</Link>
              <Link href="/resources" activeClassName="text-blue-400" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Resources</Link>
              <a 
                href="https://activities.tjhsst.edu/tjioi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                TJ IOI
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0f172a]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              activeClassName="bg-blue-900 text-white"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/calendar" 
              activeClassName="bg-blue-900 text-white"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Calendar
            </Link>
            <Link 
              href="/lectures" 
              activeClassName="bg-blue-900 text-white"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Lectures
            </Link>
            <Link 
              href="/editorials" 
              activeClassName="bg-blue-900 text-white"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Editorials
            </Link>
            <Link 
              href="/leadership" 
              activeClassName="bg-blue-900 text-white"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership
            </Link>
            <Link 
              href="/awards" 
              activeClassName="bg-blue-900 text-white"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Awards
            </Link>
            <Link 
              href="/resources" 
              activeClassName="bg-blue-900 text-white"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <a 
              href="https://activities.tjhsst.edu/tjioi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              TJ IOI
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;