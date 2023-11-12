import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ContactState from './context/contact/contactState';
import './App.css';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </ContactState>
  );
};

export default App;
