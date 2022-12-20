import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card/Card';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
