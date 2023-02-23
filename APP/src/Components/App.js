import { useState, createContext, useEffect } from "react";
import Home from "./Home";
import Nav from "./Nav";
import "./Styles/App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Cart from "./Cart";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const value = { cart, setCart };

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      setCart(JSON.parse(localStorage.getItem("cartItems")).cart)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify({ cart }));
   }, [cart]);

  return (
    <CartContext.Provider value={value}>
      <BrowserRouter>
        <div className="app">
          <Nav />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
