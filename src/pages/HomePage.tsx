import React from 'react';
import Hero from '../components/Hero';
import WhyJoin from '../components/WhyJoin';
import Calendar from '../components/Calendar';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'TJ Computer Team - Home';
  }, []);
  
  return (
    <main>
      <Hero />
      <WhyJoin />
      <Calendar />
    </main>
  );
};

export default HomePage;