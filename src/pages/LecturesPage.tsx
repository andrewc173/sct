import React, { useState, useMemo } from 'react';
import { Calendar, Search, ExternalLink } from 'lucide-react';

interface Lecture {
  id: number;
  title: string;
  date?: string;
  level: 'ICT' | 'SCT';
  topic: string;
  url: string;
  isGuest?: boolean;
  handout?: string;
}

const lectures: Lecture[] = [
  {
    id: 1,
    title: 'Generating Functions',
    date: '11/15',
    level: 'SCT',
    topic: 'Advanced Mathematics',
    url: 'https://docs.google.com/presentation/d/1msU4SQkqa1hMQLbg2E3Y1RJWGMKXfdkEimS5xmKECmw/edit?usp=drivesdk'
  },
  {
    id: 2,
    title: 'Mini Competition',
    date: '3/14',
    level: 'ICT',
    topic: 'Practice',
    url: 'https://docs.google.com/spreadsheets/d/1JX9w9IH6-kOyn2auEsa_RJ3Zyy_sZknhsouJ5NUj0Xw/edit?usp=drivesdk'
  },
  {
    id: 3,
    title: 'Shortest Path Algorithms',
    date: '1/24',
    level: 'ICT',
    topic: 'Graphs',
    url: 'https://docs.google.com/presentation/d/1grhOqyBwecddhMsIBMmFzIuGLSG3jxUlTvRZkNuRLco/edit?usp=drivesdk'
  },
  {
    id: 4,
    title: 'Puzzle Hunt Activity',
    date: '3/14',
    level: 'SCT',
    topic: 'Practice',
    url: 'https://drive.google.com/file/d/1fMVMoif0jzX1KfuovWw-zeBvSEzKfYFI/view?usp=drivesdk'
  },
  {
    id: 5,
    title: 'NT/Combo/bitwise',
    date: '2/28',
    level: 'ICT',
    topic: 'Number Theory',
    url: 'https://docs.google.com/presentation/d/1fovC9weO6Gycd-nRCdlmEpqBwhRqfwegdFTUG1re1F8/edit?usp=drivesdk'
  },
  {
    id: 6,
    title: 'Graphs',
    date: '2/28',
    level: 'SCT',
    topic: 'Graphs',
    url: 'https://docs.google.com/presentation/d/1kvIVibc9AD-PiLADOlB3HAmdzWYyUzrRxkp3NsJ53ns/edit?usp=drivesdk'
  },
  {
    id: 7,
    title: 'String Hashing & Searching',
    date: '1/24',
    level: 'SCT',
    topic: 'Strings',
    url: 'https://drive.google.com/file/d/1qcvBEaQ40qtBDbLJ3OYRChpDE2oBpHmN/view?usp=drivesdk'
  },
  {
    id: 8,
    title: 'Basic Competitive Programming',
    date: '9/20',
    level: 'ICT',
    topic: 'Fundamentals',
    url: 'https://docs.google.com/presentation/d/1649zinX4wzNMCwlLo8AWIrAgtPRDJPeRSgI0GGRALjs/edit?usp=drivesdk'
  },
  {
    id: 9,
    title: 'Bitwise Operators',
    date: '1/17',
    level: 'ICT',
    topic: 'Fundamentals',
    url: 'https://docs.google.com/presentation/d/1wr1LvBp6ir75yXu9dDNmEa_e2Rl61YcrNqlDo27grQs/edit?usp=drivesdk'
  },
  {
    id: 10,
    title: 'Hashes & Trees, Sets & Maps',
    level: 'SCT',
    topic: 'Data Structures',
    url: 'https://drive.google.com/file/d/1dRIX1iaRocs8cKmd_x9ORYtAtgjTKXyh/view?usp=drivesdk'
  },
  {
    id: 11,
    title: 'Stacks, Queues, & Priority Queues',
    date: '10/25',
    level: 'ICT',
    topic: 'Data Structures',
    url: 'https://docs.google.com/presentation/d/1ORfFtEe9Zn81XsQYbXuB2wXAEwA3wHkPQ8-e4JEmN1k/edit?usp=drivesdk'
  },
  {
    id: 12,
    title: 'Activity Problems',
    date: '10/25',
    level: 'SCT',
    topic: 'Practice',
    url: 'https://drive.google.com/file/d/1M2zseivQQMTVzn2DJPjKRLoB4Q9Wn_Sa/view?usp=drivesdk'
  },
  {
    id: 13,
    title: 'In-House Competition',
    date: '10/18',
    level: 'SCT',
    topic: 'Practice',
    url: 'https://docs.google.com/presentation/d/1dsFAUvDrSfWYvjYgIUaHHe3rikHIESyKlrLbgKYt0JU/edit?usp=drivesdk'
  },
  {
    id: 14,
    title: 'Prefix Sums and Binary Search',
    date: '10/11',
    level: 'ICT',
    topic: 'Algorithms',
    url: 'https://docs.google.com/presentation/d/1-4XRZ5CSV_AQImGwS3HHXSCyeO0q4ub4Ia6EwMdqjxs/edit?usp=drivesdk'
  },
  {
    id: 15,
    title: 'Combinatorics in Competitive Programming',
    date: '10/11',
    level: 'SCT',
    topic: 'Mathematics',
    url: 'https://docs.google.com/presentation/d/1JqI4XuUpKNzUuzNgVacKe_VeKPht4miEjm8wr89ueW8/edit?usp=drivesdk'
  },
  {
    id: 16,
    title: 'Orientation/Intro to CP',
    date: '9/6',
    level: 'ICT',
    topic: 'Fundamentals',
    url: 'https://docs.google.com/presentation/d/1tvx8e22iK7IJE0c5L9q8BkecgRJa-AH-hOwrKXSszVY/edit?usp=drivesdk'
  },
  {
    id: 17,
    title: 'Dynamic Programming',
    date: '9/20',
    level: 'SCT',
    topic: 'Algorithms',
    url: 'https://docs.google.com/presentation/d/1v7pRZE1tut-awBYEdrMsB392qfBG2lZVXsZUca5XON0/edit?usp=drivesdk'
  },
  {
    id: 18,
    title: 'Convex Hull Trick',
    level: 'SCT',
    topic: 'Geometry',
    url: 'https://drive.google.com/file/d/1D9BBpWYuO3vejOPbMZWADNrl5sZq2DQt/view?usp=drivesdk',
    isGuest: true
  },
  {
    id: 19,
    title: 'String Hashing',
    level: 'ICT',
    topic: 'Strings',
    url: 'https://drive.google.com/file/d/148_DV5vT5jFuTLsx0Za8TF1JBINoxKWf/view?usp=drivesdk',
    isGuest: true
  },
  {
    id: 20,
    title: 'Binary Lifting and LCA',
    level: 'SCT',
    topic: 'Trees',
    url: 'https://drive.google.com/file/d/16U37__dirjfP3wLByDubtSFQAaFedGfG/view?usp=drivesdk',
    isGuest: true
  },
  {
    id: 21,
    title: 'MST Lecture',
    level: 'ICT',
    topic: 'Graphs',
    url: 'https://drive.google.com/file/d/1Zi0_ZiVzsDkPPVs_tAq-iMETiNv6uWz6/view?usp=drivesdk',
    isGuest: true,
    handout: 'https://drive.google.com/file/d/1bc3m7LRPUZqwwe5wN3DFfVxzdUScmXQk/view?usp=drivesdk'
  },
  {
    id: 22,
    title: 'DSU',
    level: 'ICT',
    topic: 'Data Structures',
    url: 'https://drive.google.com/file/d/1yL_ydtHQOYQS5D0h0wkuPpYayb0J6ylI/view?usp=drivesdk',
    isGuest: true,
    handout: 'https://drive.google.com/file/d/1vn6FZpH-qtPk0GhG_3UAYuYCaNsi5_ma/view?usp=drivesdk'
  }
];

const topics = [...new Set(lectures.map(lecture => lecture.topic))].sort();

const LecturesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Update document title
  React.useEffect(() => {
    document.title = 'TJ Computer Team - Lectures';
  }, []);

  const filteredLectures = useMemo(() => {
    return lectures.filter(lecture => {
      const matchesSearch = lecture.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lecture.topic.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTopic = !selectedTopic || lecture.topic === selectedTopic;
      const matchesLevel = !selectedLevel || lecture.level === selectedLevel;
      
      return matchesSearch && matchesTopic && matchesLevel;
    });
  }, [searchQuery, selectedTopic, selectedLevel]);

  const levelColors = {
    ICT: 'bg-green-100 text-green-800 border-green-200',
    SCT: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <main className="pt-16">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lecture Materials</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Access our comprehensive collection of competitive programming lectures and resources.
          </p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search lectures..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="w-full md:w-48 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
              >
                <option value="">All Topics</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
              <select
                className="w-full md:w-48 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">All Levels</option>
                <option value="ICT">ICT</option>
                <option value="SCT">SCT</option>
              </select>
            </div>

            {/* Lectures Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLectures.map((lecture) => (
                <div
                  key={lecture.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full border ${levelColors[lecture.level]}`}>
                        {lecture.level}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                        {lecture.topic}
                      </span>
                      {lecture.isGuest && (
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                          Guest Lecture
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{lecture.title}</h3>
                    {lecture.date && (
                      <div className="flex items-center text-slate-600 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{lecture.date}</span>
                      </div>
                    )}
                    <div className="space-y-2">
                      <a
                        href={lecture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Slides
                      </a>
                      {lecture.handout && (
                        <a
                          href={lecture.handout}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Handout
                        </a>
                      )}
                    </div>
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

export default LecturesPage;