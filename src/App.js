import React from 'react';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Shop from './Pages/Shop/Shop';
import Like from './Pages/Like/Like';
import Footer from './Components/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Components/Auth/Sign/Sign';
import Sign from './Components/Auth/Login/Login';
import './App.css';
import { useNavigate } from "react-router-dom";
import { useEffect, } from 'react';
import { Routes , Route } from 'react-router-dom'


function App() {
    return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='Login' element={<Login />} />
        <Route path='Sign' element={<Sign />} />
        <Route path='/' element={<Home />} />
        <Route path='Product' element={<Product />} />
        <Route path='Shop' element={<Shop />} />
        <Route path='Like' element={<Like />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
