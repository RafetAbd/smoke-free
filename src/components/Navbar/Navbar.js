import React from "react";
import { logout } from "../../store/auth";
import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => {
        return !!state.authReducer.user.id;
    });

    const handleClick = () => {
        dispatch(logout());
    }

    return (
        <div>
            <h1>Navbar component</h1>
            <Link to="/">Home</Link>
            {isLoggedIn && (
                <button onClick={handleClick}>Logout</button>
            )}
        </div>
    );
}

export default Navbar;