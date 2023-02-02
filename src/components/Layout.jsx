import { useAuth } from 'hooks';
import { AppBar, Toolbar } from '@mui/material';
import { Navigation } from '../components/Navigation/Navigation';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { AuthNav } from '../components/AuthNav/AuthNav';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../components/common/GlobalStyle';

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
      <Toaster />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
