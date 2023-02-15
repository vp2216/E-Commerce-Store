import { useContext } from "react";
import "./Styles/Card.css";
import { CartContext } from "./App";
import { useNavigate } from "react-router-dom";

function Card({ id, image, name, price, discription }) {

  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={image} className="images" alt="game" />
      <span className="info">
        <span className="name">{name}</span>
        <span className="price">Rs. {price}</span>
        <span className="desc">{discription}</span>
        {cart.includes(id) ? (
          <span className="btn" onClick={() => navigate("/cart")}>
            Go to Cart
          </span>
        ) : (
          <span className="btn" onClick={() => setCart([...cart, id])}>
            Add to Cart
          </span>
        )}
      </span>
    </div>
  );
}

export default Card;
