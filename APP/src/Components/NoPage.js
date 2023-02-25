import "./Styles/NoPage.css";
import { useNavigate } from "react-router-dom";

export default function NoPage() {

    const navigate = useNavigate();

    return (
      <div className="nopage-main">
        <span className="nopage-header">404</span>
        <span className="nopage-content">Page not found</span>
        <button className="nopage-btn" onClick={() => navigate("/")}>
          Go to home
        </button>
      </div>
    );
}