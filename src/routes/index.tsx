import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import User from '../pages/User';
import NoPage from '../layouts/NoPage';

const AppRoutes = () => {
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