import React from 'react';
import { Code, Trophy, FileCode, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-32 z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          TJ Computer Team
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
          Building problem solvers and competitive programmers at Thomas Jefferson High School
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
          <a 
            href="#join" 
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Us
          </a>
          <a 
            href="/resources" 
            className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-100 font-medium rounded-lg hover:bg-blue-500/20 transition-all transform hover:scale-105"
          >
            Resources
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto animate-fade-in-up animation-delay-900">
          <div className="bg-slate-800/70 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 hover:shadow-blue-500/10 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Code className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Learn</h3>
            <p className="text-gray-400">Develop algorithmic thinking and programming skills with our lectures and resources.</p>
          </div>
          <div className="bg-slate-800/70 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 hover:shadow-blue-500/10 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Trophy className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Compete</h3>
            <p className="text-gray-400">Represent TJ in prestigious competitions like USACO, Google Code Jam, and more.</p>
          </div>
          <div className="bg-slate-800/70 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 hover:shadow-blue-500/10 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <FileCode className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Practice</h3>
            <p className="text-gray-400">Sharpen your skills with our custom grading system and weekly problem sets.</p>
          </div>
          <div className="bg-slate-800/70 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1 hover:shadow-blue-500/10 hover:shadow-lg">
            <div className="flex justify-center mb-4">
              <Globe className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Connect</h3>
            <p className="text-gray-400">Join a community of like-minded students passionate about computer science.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;