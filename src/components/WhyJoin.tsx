import React from 'react';
import { CheckCircle, Award, Users, Lightbulb, BookOpen, Zap } from 'lucide-react';

const WhyJoin: React.FC = () => {
  return (
    <section id="join" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Join Computer Team?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Becoming a member of TJ's Computer Team opens doors to incredible opportunities
            and helps you develop skills that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Prestigious Competitions</h3>
            <p className="text-slate-700">
              Represent TJ in national  programming contests such as USACO, PClassic, MITIT, VCU, and more.
            </p>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all">
            <BookOpen className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Structured Learning</h3>
            <p className="text-slate-700">
              Access carefully designed lecture series covering fundamental to advanced topics in algorithms and data structures.
            </p>
          </div>
          
          <div className="p-6 bg-pink-50 rounded-xl border border-pink-100 hover:shadow-lg transition-all">
            <Lightbulb className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Problem-Solving Skills</h3>
            <p className="text-slate-700">
              Develop critical thinking abilities that will help you excel in computer science, mathematics, and beyond.
            </p>
          </div>
          
          <div className="p-6 bg-green-50 rounded-xl border border-green-100 hover:shadow-lg transition-all">
            <Users className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Supportive Community</h3>
            <p className="text-slate-700">
              Join a friendly and collaborative environment where you can learn from peers and build lasting connections.
            </p>
          </div>
          
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100 hover:shadow-lg transition-all">
            <Zap className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">College Preparation</h3>
            <p className="text-slate-700">
              Gain competitive advantages for college applications through achievements in prestigious programming contests.
            </p>
          </div>
          
          <div className="p-6 bg-cyan-50 rounded-xl border border-cyan-100 hover:shadow-lg transition-all">
            <CheckCircle className="w-12 h-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Career Readiness</h3>
            <p className="text-slate-700">
              Build skills highly valued by top tech companies and prepare for technical interviews at leading firms.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://discord.gg/hyrmN3BW" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Our Discord
          </a>
          <p className="text-sm text-slate-600 mt-4">
            We meet every Friday during 8A in Room 202 and during 8B in Curie Commons. New members are always welcome!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;