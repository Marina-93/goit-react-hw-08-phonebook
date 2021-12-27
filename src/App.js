import { Suspense, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import AppBar from './component/Menu/AppBar';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import Contacts from './pages/Contacts/Contacts';
import { PrivateRoute } from './component/Routes/PrivatRoute';
import { PublicRoutes } from './component/Routes/PublicRoutes';
import { fetchCurrentUser } from './redux/auth/auth-options';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      
      <Suspense fallback={<RingLoader size={120} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
          <Route path="/login" element={<PublicRoutes><LogIn /></PublicRoutes>} />
          <Route path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
        </Routes>
      </Suspense>
    </>
  );
}