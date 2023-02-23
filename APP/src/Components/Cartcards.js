import { useContext } from "react";
import "./Styles/Cartcards.css";
import { CartContext } from "./App";

function Cartcards({ data }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart-card-div">
      <span className="cart-item-info">
        <img
          className="cart-image"
          src={`http://localhost:1337${data.attributes.poster.data.attributes.formats.large.url}`}
        />
        <div className="cart-item-name">{data.attributes.title}</div>
      </span>
      <span className="cart-item-price">
        Rs. {data.attributes.price}
      </span>
      <button
        className="cart-item-btn"
        onClick={() => {
          let arr = [];
          cart.forEach((i) => {
            if (i.id !== data.id) arr.push(i);
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
