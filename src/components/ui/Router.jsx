import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Main from '../pages/main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
