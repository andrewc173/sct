import React from 'react';
import Calendar from '../components/Calendar';

const CalendarPage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'TJ Computer Team - Calendar';
  }, []);
  
  return (
    <main className="pt-16">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Calendar & Lectures</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Stay updated with our upcoming meetings, lectures, and competitions.
          </p>
        </div>
      </div>
      
      <Calendar />
      
    </main>
  );
};

export default CalendarPage;