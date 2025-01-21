import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import { lazy } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import AdminDashboard from '../../pages/AdminDashboard';
import { AuthProvider } from '../../context/AuthContext';

const Home = lazy(() => import('../../pages/Home'));
const Abonements = lazy(() => import('../../pages/Abonements'));
const Courses = lazy(() => import('../../pages/Courses'));
const Services = lazy(() => import('../../pages/Services'));
const Massages = lazy(() => import('../../pages/Massages'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const Login = lazy(() => import('../../pages/Login'));
const PrivacyPolicy = lazy(() => import('../../pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../../pages/TermsAndConditions'));

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/abonements" element={<Abonements />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/categories" element={<Services />} />
          <Route path="/massages/:categoryId" element={<Massages />} />

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

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
