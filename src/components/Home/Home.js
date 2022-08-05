import React from "react";
import Login from "../Login/Login";
import { useSelector } from "react-redux";


const Home = () => {

    const isLoggedIn = useSelector((state) => {
        return !!state.authReducer.user.id;
    });


    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Home component after login</h1>
                </div>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Home;