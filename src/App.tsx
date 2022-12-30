import './App.scss';

import Header from './parts/Header';
import { Footer } from './parts/Footer';

import { Home } from '@features/home';
import { Route, Routes } from 'react-router-dom';

import { Flow } from '@features/flow';
import { NotFound } from '@features/404';
import Pokemon from '@features/pokemon';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/flow' element={<Flow />}></Route>
        <Route path='/pokemon' element={<Pokemon />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
