import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import axios from "axios";

function App() {
  
  axios.get('https://testtask.twnty.de/').then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
