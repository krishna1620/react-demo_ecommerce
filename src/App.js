import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./components/auth/Login.js'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
