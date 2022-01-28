import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import * as ROUTES from './constants/routes';

import NavBar from './pages/navbar';
import './App.css';

const Main = lazy(() => import('./main'));
const Projects = lazy(() => import('./pages/projects'));
const Addresses = lazy(() => import('./pages/addresses'));
const Footer = lazy(() => import('./pages/footer'));

export default function App() {
  return (
    <div className='bg-gradient-to-r from-white via-blue-400 to-blue-300 h-screen'>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Routes>
            <Route path={ROUTES.MAIN} element={<Main />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.ADDRESSES} element={<Addresses />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
