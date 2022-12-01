import './App.scss';

import Header from './parts/Header';

import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Contact } from './pages/contact';
import { Faq } from './pages/faq';
import { Author } from './pages/Author';
import { Authors } from './pages/Authors';
import { NotFound } from './pages/404';
import { Category } from './pages/Caregory';
import { Footer } from './parts/Footer';
import { Search } from './pages/search';
import { Categories } from './pages/categories';
import { About } from './pages/about';
import { Flow } from './pages/flow';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/flow' element={<Flow />}></Route>

        <Route path='/categories'>
          <Route index element={<Categories />}></Route>
          <Route path=':id' element={<Category />}></Route>
        </Route>

        <Route path='/authors'>
          <Route index element={<Authors />}></Route>
          <Route path=':id' element={<Author />}></Route>
        </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
