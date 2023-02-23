import { useContext, useEffect, useState } from "react";
import { CartContext } from "./App";
import { useNavigate } from "react-router-dom";
import Cartcards from "./Cartcards";
import "./Styles/Cart.css";

function Cart() {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  useEffect(() => {
    if (cart.length == 0) {
      setTotal(0);
      return;
    }
    let totalprice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalprice += cart[i].attributes.price;
    }
    setTotal(totalprice);
  }, [cart]);

  function pay() {}

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
                <Cartcards data={data} />
              </div>
            );
          })}
        </div>
      )}
      <div className="total">Total : Rs. {total}</div>
      <div className="btn-div">
        <button
          className="pay-btn"
          disabled={cart.length === 0 ? true : false}
          onClick={pay}
        >
          Pay Now {">"}
        </button>
      </div>
    </div>
  );
}

export default Cart;
