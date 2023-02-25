import { useNavigate } from 'react-router-dom';
import "./Styles/Success.css";

export default function Success() {

    const navigate = useNavigate();

    return (
        <div className='success-main'>
            <span className='success-message'>
                Thank you for the purchase
            </span>
            <button className='success-btn' onClick={() => navigate("/")}>Buy more games</button>
        </div>
    )
}