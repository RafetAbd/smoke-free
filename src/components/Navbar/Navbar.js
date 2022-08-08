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
            {isLoggedIn ? (
                <div className="navbar-inner-div">
                    <Link to="/" className="to-home-link">Home</Link>
                    <button onClick={handleClick}>Logout</button>
                </div>
            ) : (
                <div className="navbar-inner-div">
                    <Link to="/login" onClick={() => clearAllError()} className="to-home-link">Home</Link>
                </div>
            )}

        </div>
    );
}

export default Navbar;