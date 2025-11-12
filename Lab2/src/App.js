import React from 'react';
import OrchidsContainer from './components/OrchidsContainer';
import ThemeToggle from './components/ThemeToggle';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <OrchidsContainer />
    </div>
  );
}

export default App;
