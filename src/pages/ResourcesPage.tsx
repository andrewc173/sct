import React from 'react';
import Resources from '../components/Resources';

const ResourcesPage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'TJ Computer Team - Resources';
  }, []);
  
  return (
    <main className="pt-16">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Tools, guides, and platforms to help you excel in competitive programming.
          </p>
        </div>
      </div>
      
      <Resources />
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Recommended Study Path</h2>
            <p className="text-lg text-slate-600 mb-10 text-center">
              A structured learning path to help you advance from beginner to expert in competitive programming.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                  <h3 className="ml-4 text-xl font-bold text-slate-900">Fundamentals</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Master the basics of algorithms and data structures to build a solid foundation.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Time complexity, simulation, brute force</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Arrays, strings, maps, sets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Basic sorting and searching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Intro recursion and greedy</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="https://usaco.guide/bronze" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                    USACO Guide: Bronze Level →
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">2</div>
                  <h3 className="ml-4 text-xl font-bold text-slate-900">Intermediate Algorithms</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Build on fundamentals with more advanced algorithmic techniques.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>DFS/BFS and graph traversal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Basic dynamic programming (1D, knapsack)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Binary search on answers, two pointers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Greedy with sorting and intervals</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="https://usaco.guide/silver" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                    USACO Guide: Silver Level →
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">3</div>
                  <h3 className="ml-4 text-xl font-bold text-slate-900">Advanced Topics</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Delve into more complex algorithmic techniques and data structures.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>DP on trees and subsets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Trees: LCA, Euler Tour, Binary Lifting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Graphs: Dijkstra, Toposort, SCC</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Prefix sums, segment/Fenwick trees</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="https://usaco.guide/gold" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                    USACO Guide: Gold Level →
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">4</div>
                  <h3 className="ml-4 text-xl font-bold text-slate-900">Specialized Techniques</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Master specialized algorithms used in the most challenging problems.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Treaps, DSU, persistent structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Max flow, min cost flow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Convex hull, sweep line, geometry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>String matching, hashes, suffix structures</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="https://usaco.guide/plat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                    USACO Guide: Platinum Level →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;