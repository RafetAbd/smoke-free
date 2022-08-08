import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateSignup, clearError } from "../../store/auth";
import { Link } from "react-router-dom";
import './Signup.css';

const Signup = () => {

    const [email,setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [quittingDay, setQuittingDay] = React.useState("");
    const [packetPrice, setPacketPrice] = React.useState("");
    const [cigarettesPerDay, setCigarettesPerDay] = React.useState("");
    const [error, setError] = React.useState("");

    const dispatch = useDispatch();

    let err = useSelector((state) => state.authReducer.error.error);
    
    const handleSubmmit = async(e) => {
        e.preventDefault();
        if(!email || !password || !name || !quittingDay || !packetPrice || !cigarettesPerDay){
            setError("Please fill in all fields");
            return;
        }
        await dispatch(authenticateSignup(email, password, name, quittingDay, packetPrice, cigarettesPerDay, "signup"));
    }

    const clearAllError = async() => {
        console.log("clear error");
        // invoke the clear error action creator to clear the error
        await dispatch(clearError());
    }

    return (
        <div className="signup-main-div">
            <p className="signup-main-p">Today is the day ...</p>
            {error && <p className="error">{error}</p>}
            {err && <p className="error">{err.response.data.message}</p>}
            <form onSubmit={handleSubmmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Quitting Date </label>
                <input type="date" placeholder="Quitting Day" data-date-format="DD MMMM YYYY" value={quittingDay} onChange={(e) => setQuittingDay(e.target.value)} />
                <input type="text" placeholder="Packet Price" value={packetPrice} onChange={(e) => setPacketPrice(e.target.value)} />
                <input type="text" placeholder="Cigarettes Per Day" value={cigarettesPerDay} onChange={(e) => setCigarettesPerDay(e.target.value)} />
                <button type="submit" className="submit-botton">Signup</button>
            </form>
            <p className="already-have-an-account">Already have an account? <Link to="/login" onClick={() => clearAllError()} className="login-link">Login</Link></p>
        </div>
    );
}

export default Signup;