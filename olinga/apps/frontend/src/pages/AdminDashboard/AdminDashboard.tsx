import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Button,
  Container,
  DoubleContainer,
  TabButton,
  TabsContainer,
} from './AdminDashboard.styled';
import { LuLogOut } from 'react-icons/lu';
import CategoryAdmin from '../../components/CategoryAdmin/CategoryAdmin';
import { ToastContainer } from 'react-toastify';
import CourseAdmin from '../../components/CoursesAdmin/CoursesAdmin';
import AbonementsAdmin from '../../components/AbonementsAdmin';
import AdminLeads from '../../components/AdminLeads';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'categories':
        return <CategoryAdmin />;
      case 'courses':
        return <CourseAdmin />;
      case 'abonements':
        return <AbonementsAdmin />;
      case 'leads':
        return <AdminLeads />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <TabsContainer>
        <TabButton
          active={activeTab === 'categories'}
          onClick={() => setActiveTab('categories')}
        >
          Massages
        </TabButton>
        <TabButton
          active={activeTab === 'courses'}
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </TabButton>
        <TabButton
          active={activeTab === 'abonements'}
          onClick={() => setActiveTab('abonements')}
        >
          Abonements
        </TabButton>
        <TabButton
          active={activeTab === 'leads'}
          onClick={() => setActiveTab('leads')}
        >
          Leads
        </TabButton>
        <Button onClick={handleLogout}>
          Log Out<LuLogOut />
        </Button>
      </TabsContainer>
      {
        <>
          {renderContent()}

          <ToastContainer />
        </>
      }
    </Container>
  );
};

export default AdminDashboard;
