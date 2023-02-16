import { useContext } from "react";
import Products from "./Products";
import "./Styles/Cartcards.css";
import { CartContext } from "./App";

function Cartcards({ id }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart-card-div">
      <span className="cart-item-info">
        <img className="cart-image" src={Products[id].image} />
        <div className="cart-item-name">{Products[id].name}</div>
      </span>
      <span className="cart-item-price">Rs. {Products[id].price}</span>
      <button
        className="cart-item-btn"
              onClick={() => {
            let arr = []
          cart.forEach(i => {
              if (i !== id) arr.push(i)
          });
                  setCart(arr);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Cartcards;
