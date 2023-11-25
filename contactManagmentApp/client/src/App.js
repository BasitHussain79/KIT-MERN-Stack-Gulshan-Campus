import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ContactState from './context/contact/contactState';
import Register from './pages/register';
import Login from './pages/login';
import './App.css';
import AlertState from './context/alert/alertState';
import Alert from './components/common/Alert';
import Layout from './components/ui/Layout';
import AuthState from './context/auth/authState';
import AppRouter from './router';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Alert />
            <AppRouter />
            {/* <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes> */}
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
