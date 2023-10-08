import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home, About } from './pages';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Fragment>
  );
};

export default App;
