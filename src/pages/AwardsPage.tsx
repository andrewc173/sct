import React from 'react';

const AwardsPage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'TJ Computer Team - Awards';
  }, []);
  
  return (
    <main className="pt-16">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Competition History</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            A timeline of our team's achievements in competitive programming.
          </p>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative px-4">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-blue-200 left-1/2 transform -translate-x-1/2"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                  <div className="flex items-center justify-end md:w-1/2 pr-8 md:pr-12">
                    <div className="bg-slate-50 p-5 rounded-lg shadow border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900">2024-2025</h3>
                      <ul className="mt-2 space-y-1 text-slate-700">
                        <li>• 1st and 2nd place at VCU</li>
                        <li>• 1st place at UMD</li>
                        <li>• 2nd place PClassic Fall Advanced</li>
                        <li>• 2nd and 3rd place Lockheed Martin Advanced</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-12">
                    <div className="bg-slate-50 p-5 rounded-lg shadow border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900">2023-2024</h3>
                      <ul className="mt-2 space-y-1 text-slate-700">
                        <li>• 1st and 2nd place at UVA</li>
                        <li>• 1st and 2nd place at Widener</li>
                        <li>• Battlecode 2024 High School Tournament winner</li>
                        <li>• 1st place at UMD</li>
                        <li>• 1st and 4th place at VCU</li>
                        <li>• 2nd and 4th place at PClassic Fall Advanced</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                  <div className="flex items-center justify-end md:w-1/2 pr-8 md:pr-12">
                    <div className="bg-slate-50 p-5 rounded-lg shadow border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900">2022-2023</h3>
                      <ul className="mt-2 space-y-1 text-slate-700">
                        <li>• 1st place at UMD</li>
                        <li>• 3rd place at Widener</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-12">
                    <div className="bg-slate-50 p-5 rounded-lg shadow border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-900">2021-2022</h3>
                      <ul className="mt-2 space-y-1 text-slate-700">
                        <li>• 1st and 2nd place at VCU</li>
                        <li>• 1st and 4th place at UVA</li>
                        <li>• 2nd place at PClassic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AwardsPage;