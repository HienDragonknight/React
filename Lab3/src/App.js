import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import OrchidsContainer from './components/OrchidsContainer';
import Detail from './components/Detail';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import useTheme from './hooks/useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="App">
        <Navigation />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        <Routes>
          <Route path="/" element={<OrchidsContainer />} />
          <Route path="/orchid/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
