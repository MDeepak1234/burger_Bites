import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Background from "./Components/Background";
import Offers from "./Components/Offers";
import Collab from "./Components/Collab";
import Locations from "./Components/Locations";
import Footer from "./Components/Footer";
import Login from "./Home/Login";
import Order from "./Components/Order"; 
import OurMenu from "./Components/OurMenu";
import Cart from "./Components/Cart";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar c={cartCount} />
              <Locations />
              <Background />
              <Menu setCartCount={setCartCount} />
              <Offers />
              <Collab />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/order" 
          element={
            <>
              <Navbar c={cartCount} /> 
              <Order /> 
            </>
          } 
        />
        <Route 
          path="/menu" 
          element={
            <>
              <Navbar c={cartCount} /> 
              <OurMenu setCartCount={setCartCount}/>
            </>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <>
              <Navbar c={cartCount} /> 
              <Cart c={cartCount}/>
            </>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
