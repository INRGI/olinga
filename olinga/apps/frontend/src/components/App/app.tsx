import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));
const Courses = lazy(() => import('../../pages/Courses'));
const Services = lazy(() => import('../../pages/Services'));
const NotFound = lazy(() => import('../../pages/NotFound'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
