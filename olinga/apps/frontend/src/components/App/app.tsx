import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import { lazy } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import AdminDashboard from '../../pages/AdminDashboard';
import { AuthProvider } from '../../context/AuthContext';

const Home = lazy(() => import('../../pages/Home'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));
const Courses = lazy(() => import('../../pages/Courses'));
const Services = lazy(() => import('../../pages/Services'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const Login = lazy(() => import('../../pages/Login'));

export function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/massages" element={<Services />} />

        <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

        <Route path="/login" element={<Login />} />

        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
