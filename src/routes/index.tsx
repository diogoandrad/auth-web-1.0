import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ProfileForm from '../pages/Profile/form';
import User from '../pages/User';
import NoPage from '../layouts/NoPage';
import { Register } from '../layouts/Auth/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profiles" element={<Profile />} />
      <Route path="/profiles/create" element={<ProfileForm />} />
      <Route path="/profiles/update/:id" element={<ProfileForm />} />
      <Route path="/users" element={<User />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRoutes;