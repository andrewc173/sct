import React from 'react';
import Leadership from '../components/Leadership';

const LeadershipPage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'TJ Computer Team - Leadership';
  }, []);
  
  return (
    <main className="pt-16">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Team Leadership</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Meet the students who lead our club activities and make the TJ Computer Team possible.
          </p>
        </div>
      </div>
      
      <Leadership />
    </main>
  );
};

export default LeadershipPage;