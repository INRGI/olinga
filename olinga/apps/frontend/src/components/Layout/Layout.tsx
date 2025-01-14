import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBlock from '../HeaderBlock';
import Footer from '../Footer';
import { ToastContainer } from 'react-toastify';

const Layout: React.FC = () => {
  return (
    <>
    <HeaderBlock />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
