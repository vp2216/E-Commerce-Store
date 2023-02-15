import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Styles/Nav.css";
import { CartContext } from "./App";
import { useNavigate } from "react-router-dom";

function Nav() {

  const navigate = useNavigate();  
  const { cart } = useContext(CartContext);

  return (
    <div className="nav">
      <span className="site-name" onClick={()=>navigate("/")}>GameShop</span>
      <span className={cart.length !== 0 ? "cart-btn-span" : null}>
        <FaShoppingCart className="cart-btn" onClick={()=>navigate("/cart")}/>
      </span>
    </div>
  );
}

export default Nav;
