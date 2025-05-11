import React from 'react';
import { Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TJ Computer Team</h3>
            <p className="text-gray-400">
              Thomas Jefferson High School for Science and Technology's competitive programming club.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://usaco.guide" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">USACO Guide</a></li>
              <li><a href="https://www.tjctgrader.org/" className="text-gray-400 hover:text-blue-400 transition-colors">Team Grader</a></li>
              <li><a href="https://discord.gg/hyrmN3BW" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">Join Discord</a></li>
              <li><a href="https://activities.tjhsst.edu/tjioi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">TJ IOI</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-gray-400" />
              <a href="mailto:tjhsstictcaptains@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">tjhsstictcaptains@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-2 text-gray-400" />
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Github</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white">
          <p>Website made by Andrew Chen ('26)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
