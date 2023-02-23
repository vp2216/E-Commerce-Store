import { useContext } from "react";
import "./Styles/Card.css";
import { CartContext } from "./App";
import { useNavigate } from "react-router-dom";

function Card({ data, image, title, price, discription }) {

  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={`http://localhost:1337${image}`} className="images" alt="game" />
      <span className="info">
        <span className="name">{title}</span>
        <span className="price">Rs. {price}</span>
        <span className="desc">{discription}</span>
        {cart.find((e)=>e.id == data.id) ? (
          <span className="btn" onClick={() => navigate("/cart")}>
            Go to Cart
          </span>
        ) : (
          <span className="btn" onClick={() => setCart([...cart, data])}>
            Add to Cart
          </span>
        )}
      </span>
    </div>
  );
}

export default Card;
