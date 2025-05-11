import React from 'react';
import { BookOpen, ExternalLink, Code, FileCode, Github, MessageSquare } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  category: 'learning' | 'practice' | 'tools' | 'community';
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'USACO Guide',
    description: 'Comprehensive, free guide to competitive programming created by top USACO competitors.',
    url: 'https://usaco.guide',
    icon: <BookOpen className="w-6 h-6" />,
    category: 'learning'
  },
  {
    id: 2,
    title: 'TJ Computer Team Grader',
    description: 'Our custom grading platform for practice problems and in-house competitions.',
    url: '#',
    icon: <Code className="w-6 h-6" />,
    category: 'practice'
  },
  {
    id: 3,
    title: 'Codeforces',
    description: 'Platform for competitive programming contests with a large problem archive.',
    url: 'https://codeforces.com',
    icon: <FileCode className="w-6 h-6" />,
    category: 'practice'
  },
  {
    id: 4,
    title: 'USACO',
    description: 'Official site for the USA Computing Olympiad with past contests and resources.',
    url: 'http://usaco.org',
    icon: <BookOpen className="w-6 h-6" />,
    category: 'learning'
  },
  {
    id: 5,
    title: 'Computer Team GitHub',
    description: 'Repository with code examples, solutions, and learning resources.',
    url: '#',
    icon: <Github className="w-6 h-6" />,
    category: 'tools'
  },
  {
    id: 6,
    title: 'AtCoder',
    description: 'Japanese competitive programming platform with high-quality problems.',
    url: 'https://atcoder.jp',
    icon: <FileCode className="w-6 h-6" />,
    category: 'practice'
  },
  {
    id: 7,
    title: 'TJ IOI',
    description: 'The official website for Thomas Jefferson\'s International Olympiad in Informatics.',
    url: 'https://activities.tjhsst.edu/tjioi/',
    icon: <ExternalLink className="w-6 h-6" />,
    category: 'learning'
  },
  {
    id: 8,
    title: 'Computer Team Discord',
    description: 'Join our Discord server to connect with team members and get help.',
    url: 'https://discord.gg/hyrmN3BW',
    icon: <MessageSquare className="w-6 h-6" />,
    category: 'community'
  }
];

const categoryColors = {
  learning: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    text: 'text-blue-600',
    hover: 'group-hover:bg-blue-100',
    icon: 'text-blue-500'
  },
  practice: {
    bg: 'bg-green-50',
    border: 'border-green-100',
    text: 'text-green-600',
    hover: 'group-hover:bg-green-100',
    icon: 'text-green-500'
  },
  tools: {
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    text: 'text-purple-600',
    hover: 'group-hover:bg-purple-100',
    icon: 'text-purple-500'
  },
  community: {
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    text: 'text-orange-600',
    hover: 'group-hover:bg-orange-100',
    icon: 'text-orange-500'
  }
};

const ResourceComponent: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Programming Resources</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore these valuable resources to enhance your competitive programming skills
            and prepare for competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {resources.map((resource) => {
            const style = categoryColors[resource.category];
            
            return (
              <a 
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border hover:shadow-lg transition-all overflow-hidden h-full"
              >
                <div className={`${style.bg} ${style.border} p-4 flex items-center border-b group-hover:shadow transition-all ${style.hover}`}>
                  <div className={`${style.icon} mr-3`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{resource.title}</h3>
                </div>
                <div className="p-4 flex-1 bg-white border-b border-l border-r border-gray-100 rounded-b-xl">
                  <p className="text-slate-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex justify-end">
                    <span className={`text-sm font-medium flex items-center ${style.text}`}>
                      Visit
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Need more resources?</h3>
            <p className="text-slate-700 mb-4">
              If you're looking for additional resources or have questions about competitive programming,
              join our Discord server where team members and alumni can help guide your learning journey.
            </p>
            <a 
              href="https://discord.gg/hyrmN3BW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceComponent;