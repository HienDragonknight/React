import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navigation from './components/Navigation';
import OrchidsContainer from './components/OrchidsContainer';
import Detail from './components/Detail';
import Contact from './components/Contact';
import About from './components/About';
import Natural from './components/Natural';
import Special from './components/Special';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<OrchidsContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/naturals" element={<Natural />} />
            <Route path="/specials" element={<Special />} />
            <Route path="/orchid/:id" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
