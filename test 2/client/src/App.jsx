import React, { useEffect } from 'react';
import './App.css';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Services from './components/Services/Services';
import Loader from './components/Loader/Loader';
import OneService from './components/OneService/OneService';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/services');
  }, []);
  const { loading } = useSelector((s) => s.services);
  return (
    <>
      {loading ? <Loader /> : ''}
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<OneService />} />
      </Routes>
    </>
  );
}

export default App;
