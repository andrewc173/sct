import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'lecture' | 'competition' | 'workshop' | 'other';
}

const events: Event[] = [
  {
    id: 1,
    title: 'Introduction to Game Theory',
    description: 'Learn the basics of game theory and its applications to competitive programming.',
    date: 'May 12, 2025',
    time: '2:25 PM - 3:05 PM',
    location: 'Room 202',
    category: 'lecture'
  },
  {
    id: 2,
    title: 'Binary Lifting and Least Common Ancestor',
    description: 'Learn about Binary Lifting and Least Common Ancestor and its applications to competitive programming.',
    date: 'May 12, 2025',
    time: '3:20 PM - 3:40 PM',
    location: 'Curie Commons',
    category: 'lecture'
  },
  {
    id: 3,
    title: 'Topological Sorting',
    description: 'Learn the basics of topological sorting and its applications to competitive programming.',
    date: 'May 12, 2025',
    time: '3:40 PM - 4:00 PM',
    location: 'Curie Commons',
    category: 'lecture'
  },
  {
    id: 4,
    title: 'Computer Team Elections',
    description: 'Vote for the officers for the 2025-2026 school year.',
    date: 'May 16, 2025',
    time: '2:25 PM - 4:00 PM',
    location: 'Room 202 & Curie Commons',
    category: 'other'
  },
  {
    id: 5,
    title: 'End of Year Party',
    description: 'Celebrating the end of the year with our end-of-year party!',
    date: 'May 30, 2025',
    time: '2:25 PM - 3:40 PM',
    location: 'Room 202 & Curie Commons',
    category: 'other'
  }
];

const categoryColors = {
  lecture: 'bg-blue-100 text-blue-800 border-blue-200',
  competition: 'bg-purple-100 text-purple-800 border-purple-200',
  workshop: 'bg-green-100 text-green-800 border-green-200',
  other: 'bg-gray-100 text-gray-800 border-gray-200'
};

const categoryLabels = {
  lecture: 'Lecture',
  competition: 'Competition',
  workshop: 'Workshop',
  other: 'Other'
};

const CalendarComponent: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Stay up to date with our lectures, competitions, and workshops.
            All events are open to club members.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 flex flex-col items-center justify-center md:w-48">
                  <CalendarIcon className="w-8 h-8 mb-2" />
                  <div className="text-center">
                    <div className="font-medium">{event.date.split(',')[0]}</div>
                    <div className="text-2xl font-bold">{event.date.split(' ')[1].replace(',', '')}</div>
                    <div>{event.date.split(',')[1]}</div>
                  </div>
                </div>
                <div className="p-6 md:flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[event.category]}`}>
                      {categoryLabels[event.category]}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{event.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center text-slate-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-slate-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://docs.google.com/spreadsheets/d/1H4DdJTlFXAZqA6W1yegPFmOJGctda-t4ZL-_mmLoxgY/edit?gid=0#gid=0" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <span>View Full Calendar</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CalendarComponent;