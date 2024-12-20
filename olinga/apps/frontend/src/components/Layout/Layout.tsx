import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderBlock from '../HeaderBlock';

const Layout: React.FC = () => {
  return (
    <>
    <HeaderBlock />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
