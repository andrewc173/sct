import React from 'react';
import { useLocation } from '../hooks/useLocation';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  activeClassName = '',
  onClick
}) => {
  const location = useLocation();
  const isActive = location === href;
  
  const combinedClassName = `${className} ${isActive ? activeClassName : ''}`;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new Event('popstate'));
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a href={href} className={combinedClassName} onClick={handleClick}>
      {children}
    </a>
  );
};