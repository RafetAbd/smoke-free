import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authenticateLogin, clearError } from "../../store/auth";
import './Login.css';

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const err = useSelector((state) => state.authReducer.error.error);

    const dispatch = useDispatch();

    // handle the form submit
    const handleSubmit = async (e) => {
        // prevent the default behavior of the form
        e.preventDefault();
        // if the email or password is empty, set the error
        if (!email || !password) {
            setError("Please enter an email and password");
            return;
        };
        // invoke the authenticate action creator to authenticate the user
        await dispatch(authenticateLogin(email, password, "login"));
    }

    const clearAllError = async () => {
        console.log("clear error");
        // invoke the clear error action creator to clear the error
        await dispatch(clearError());
    }

    return (
        <div className="login-main-div" style={{ backgroundImage: "url(/background.jpg)", backgroundColor: "#cccccc", backgroundSize: "cover", backgroundRepeat: "no-repeat", ackgroundPosition: "center center" }}>
            <p className="login-main-phrase">Life is better without cigarettes</p>
            <p className="quote">“It always seems impossible until it's done.” — Nelson Mandela</p>
            {error && <p className="error">{error}</p>}
            {err && <p className="error">{err.response.data}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to="" className="forgrt-password-link">Forget Password ?</Link>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="Dont-have-an-account">Don't have an account? <Link to="/signup" onClick={() => clearAllError()} className="sign-up-link">Signup</Link></p>
            <p className="or">OR</p>
            <button type="submit" className="login-with-bottons">continue with Google</button>
            <button type="submit" className="login-with-bottons">continue with Apple</button>
            <button type="submit" className="login-with-bottons">continue with Facebook</button>
        </div>
    );
}

export default Login;