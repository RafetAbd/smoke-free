import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authenticate, clearError } from "../../store/auth";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const err = useSelector((state) => state.authReducer.error);

    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if ( !email || !password ) {
            setError("Please enter an email and password");
            return;
        };
        await dispatch(authenticate(email,password,"login")); 
    }

    const clearAllError = async() => {
        console.log("clear error");
        await dispatch(clearError());
    }

    return (
        <div>
            <h1>Login component</h1>
            {error && <p>{error}</p>}
            {err && <p>{err.message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup" onClick={() => clearAllError()}>Signup</Link></p>
        </div>
    );
}

export default Login;