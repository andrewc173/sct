import { useState, useEffect } from 'react';

export const useLocation = () => {
  const [path, setPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);
  
  return path;
};