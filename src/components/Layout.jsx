import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Toaster />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
