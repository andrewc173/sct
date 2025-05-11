import React from 'react';
import { useLocation } from './hooks/useLocation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import LeadershipPage from './pages/LeadershipPage';
import AwardsPage from './pages/AwardsPage';
import ResourcesPage from './pages/ResourcesPage';
import LecturesPage from './pages/LecturesPage';
import EditorialsPage from './pages/EditorialsPage';

// Add CSS for animations
import './styles/animations.css';

function App() {
  const location = useLocation();
  
  const renderPage = () => {
    switch (location) {
      case '/':
        return <HomePage />;
      case '/calendar':
        return <CalendarPage />;
      case '/lectures':
        return <LecturesPage />;
      case '/editorials':
        return <EditorialsPage />;
      case '/leadership':
        return <LeadershipPage />;
      case '/awards':
        return <AwardsPage />;
      case '/resources':
        return <ResourcesPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;