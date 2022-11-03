import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDrawerContext } from '../contexts';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import User from '../pages/User';
import NoPage from '../layouts/NoPage';

const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/',
        label: 'Home',
      },
      {
        icon: 'badge',
        path: '/profiles',
        label: 'Profiles',
      },
      {
        icon: 'people',
        path: '/users',
        label: 'Users',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profiles" element={<Profile />} />
      <Route path="/users" element={<User />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;