import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authenticateLogin, clearError } from "../../store/auth";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const err = useSelector((state) => state.authReducer.error.error);

    console.log('hello world');

    const dispatch = useDispatch();

    // handle the form submit
    const handleSubmit = async(e) => {
        // prevent the default behavior of the form
        e.preventDefault();
        // if the email or password is empty, set the error
        if ( !email || !password ) {
            setError("Please enter an email and password");
            return;
        };
        // invoke the authenticate action creator to authenticate the user
        await dispatch(authenticateLogin(email,password,"login")); 
    }

    const clearAllError = async() => {
        console.log("clear error");
        // invoke the clear error action creator to clear the error
        await dispatch(clearError());
    }

    return (
        <div>
            <h1>Login component</h1>
            {error && <p>{error}</p>}
            {err && <p>{err.response.data}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to="">forget password</Link>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup" onClick={() => clearAllError()}>Signup</Link></p>
            <div>
                <button type="submit">continue with Google</button>
                <button type="submit">continue with Apple</button>
                <button type="submit">continue with Facebook</button>
                </div>
        </div>
    );
}

export default Login;