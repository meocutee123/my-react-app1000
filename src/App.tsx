import './App.scss';

import { Home } from '@features/home';
import { Route, Routes } from 'react-router-dom';

import { NotFound } from '@features/404';
import Pokemon from '@features/pokemon';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/pokemon' element={<Pokemon />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
