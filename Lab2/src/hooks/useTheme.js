import { useState, useEffect } from 'react';

// Custom Hook for managing theme (dark/light mode)
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('orchid-app-theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Save theme to localStorage whenever it changes
    localStorage.setItem('orchid-app-theme', theme);
    
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};

export default useTheme;
