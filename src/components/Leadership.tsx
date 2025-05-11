import React from 'react';
import { Mail } from 'lucide-react';

interface Officer {
  id?: number;
  name: string;
  role: string;
  email?: string;
}

const officers: Officer[] = [
  {
    name: 'Avnith Vijayram',
    role: 'SCT Captain',
  },
  {
    name: 'Gabriel Xu',
    role: 'SCT Co-Captain',
  },
  {
    name: 'Samarth Bhargav',
    role: 'SCT Co-Captain',
  },
  {
    name: 'Olivia Wu',
    role: 'ICT Captain',
  },
  {
    name: 'Daniel Feng',
    role: 'ICT Co-Captain',
  },
  {
    name: 'Clinton Morimoto',
    role: 'ICT Co-Captain',
  },
  {
    name: 'Andrew Chen',
    role: 'Webmaster',
  },
  {
    name: 'Peter Kisselev',
    role: 'Webmaster',
  },
  {
    name: 'Lulu Huang',
    role: 'Finance Officer',
  },
  {
    name: 'Avni Garg',
    role: 'Teaching Coordinator',
  }
];

const sponsors: Officer[] = [
  {
    name: 'Ms. Kim',
    role: 'Faculty Sponsor',
    email: 'jrkim@fcps.edu'
  },
  {
    name: 'Dr. Yilmaz',
    role: 'Faculty Sponsor',
    email: 'meyilmaz@fcps.edu'
  },
  {
    name: 'Mr. Rose',
    role: 'Faculty Sponsor',
    email: 'srrose@fcps.edu'
  }
];

const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {officers.map((officer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">{officer.name}</h3>
              <p className="text-blue-600 font-medium">{officer.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Faculty Sponsors</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our dedicated sponsors who support and guide the TJ Computer Team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6"
            >
              <h3 className="text-xl font-bold text-slate-900">{sponsor.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{sponsor.role}</p>
              {sponsor.email && (
                <a 
                  href={`mailto:${sponsor.email}`} 
                  className="flex items-center text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {sponsor.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;