import { Suspense, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { RingLoader } from "react-spinners";
import AppBar from "./component/Menu/AppBar";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import { fetchCurrentUser } from './redux/auth/auth-options';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      
      <Suspense fallback={<RingLoader size={120}/>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      </Suspense>
    </>
  );
}