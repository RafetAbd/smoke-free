import React from "react";
import { logout } from "../../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearError } from "../../store/auth";
import './Navbar.css';

const Navbar = () => {

    const dispatch = useDispatch();

    const err = useSelector((state) => state.authReducer.error.error);

    const isLoggedIn = useSelector((state) => {
        return !!state.authReducer.user.id;
    });

    const handleClick = () => {
        dispatch(logout());
    }

    const clearAllError = async() => {
        console.log("clear error");
        // invoke the clear error action creator to clear the error
        await dispatch(clearError());
    }

    return (
        <div className="navbar-main-div">
            <h1>Navbar component</h1>
            {isLoggedIn ? (
                <div>
                    <Link to="/">Home</Link>
                    <button onClick={handleClick}>Logout</button>
                </div>
            ) : (
                <div>
                    <Link to="/login" onClick={() => clearAllError()}>Home</Link>
                </div>
            )}

        </div>
    );
}

export default Navbar;