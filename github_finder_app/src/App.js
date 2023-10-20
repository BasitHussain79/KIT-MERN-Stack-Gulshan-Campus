import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Profile } from './pages';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:name' element={<Profile />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Fragment>
  );
};

export default App;
