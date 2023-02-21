import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import CreateUser from './components/auth/CreateUser';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/Create-User" exact element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
