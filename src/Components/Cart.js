import { useContext, useEffect, useState } from "react";
import { CartContext } from "./App";
import { useNavigate } from "react-router-dom";
import Cartcards from "./Cartcards";
import "./Styles/Cart.css";
import Products from "./Products";

function Cart() {
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    if (cart.length == 0) {
      setTotal(0);
      return;
    }
    let totalprice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalprice += parseInt(Products[cart[i]].price);
    }
    setTotal(totalprice);
  }, [cart]);

  function pay() {

  }

  return (
    <div className="cart-main">
      <span className="back-btn" onClick={() => navigate("/")}>
        {"<"} Back
      </span>
      {cart.length === 0 ? (
        <div className="no-items">No items to show in cart</div>
      ) : (
        <div className="items">
          {cart.map((data, i) => {
            return (
              <div className="cart-item" key={i}>
                <Cartcards id={data} />
              </div>
            );
          })}
        </div>
      )}
      <div className="total">Total : Rs. {total}</div>
      <div className="btn-div">
        <button className="pay-btn" disabled={cart.length === 0 ? true : false} onClick={pay}>Pay Now {">"}</button>
      </div>
    </div>
  );
}

export default Cart;
