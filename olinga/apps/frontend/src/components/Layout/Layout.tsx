import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBlock from '../HeaderBlock';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <>
    <HeaderBlock />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
