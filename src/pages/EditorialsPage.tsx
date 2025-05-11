import React, { useState, useMemo } from 'react';
import { Calendar, Search, ExternalLink } from 'lucide-react';

interface Editorial {
  id: number;
  title: string;
  author: string;
  date: string;
  url: string;
}

const editorials: Editorial[] = [
  {
    id: 1,
    title: 'Inhouse Contest #1',
    author: 'TJ Computer Team',
    date: '2024-10-18',
    url: 'https://drive.google.com/file/d/1CRpl26DHnn5mJgEKj7P0Yu5k1Fft9Y6a/view'
  },
  {
    id: 2,
    title: 'Inhouse Contest #2',
    author: 'TJ Computer Team',
    date: '2024-11-01',
    url: 'https://docs.google.com/document/d/1msAAQaGBSVnLlY-6Yh2geI0QLEmeOP64D1ESFzBwWYM/edit?tab=t.0#heading=h.u1ihoaz02ot1'
  },
  {
    id: 3,
    title: 'Inhouse Contest #3',
    author: 'TJ Computer Team',
    date: '2024-12-16',
    url: 'https://drive.google.com/file/d/1gOiRlj1Ru3qCt8kFLaMity-VTKbdAvdm/view'
  },
  {
    id: 4,
    title: 'Inhouse Contest #4',
    author: 'TJ Computer Team',
    date: '2025-01-20',
    url: 'https://hackmd.io/@6EDmqqFAQC-ccXbgRR7ccg/B1gbmmn_Jx#'
  },
  {
    id: 5,
    title: 'Inhouse Contest #5',
    author: 'TJ Computer Team',
    date: '2025-02-01',
    url: 'https://docs.google.com/document/d/1x4fRF_Z3p-6Ha79E4bMhm_bd2oa4m7oBVSdL2Bpr7aI/edit?tab=t.0#heading=h.u1ihoaz02ot1'
  },
  {
    id: 6,
    title: 'Inhouse Contest #6',
    author: 'TJ Computer Team',
    date: '2025-03-01',
    url: 'https://docs.google.com/document/d/1T57Si5_xNYak0aYFL_PfG9vYtebWdhiW5GDCG5FJhN8/edit?tab=t.0#heading=h.k9ct5wc5bnyg'
  }
];

const EditorialsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Update document title
  React.useEffect(() => {
    document.title = 'TJ Computer Team - Editorials';
  }, []);

  const filteredEditorials = useMemo(() => {
    return editorials.filter(editorial => {
      const searchText = searchQuery.toLowerCase();
      return editorial.title.toLowerCase().includes(searchText);
    });
  }, [searchQuery]);

  return (
    <main className="pt-16">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contest Editorials</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Solutions and explanations for our in-house competitive programming contests.
          </p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search */}
            <div className="mb-8 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search editorials..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Editorials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEditorials.map((editorial) => (
                <div
                  key={editorial.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{editorial.title}</h3>
                    <div className="text-slate-600 mb-2">{editorial.author}</div>
                    <div className="flex items-center text-slate-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {new Date(editorial.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <a
                      href={editorial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Editorial
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditorialsPage;