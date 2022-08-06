import React from "react";
import Login from "../Login/Login";
import { useSelector } from "react-redux";


const Home = () => {

    const isLoggedIn = useSelector((state) => {
        return !!state.authReducer.user.id;
    });

    const user = useSelector((state) => {
        return state.authReducer.user;
    });

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Home component after login</h1>
                    <p>Hello {user.name}</p>
                    <p>{user.quittingDay}</p>
                    <p>{user.PacketPrice}</p>
                    <p>{user.cigarettesPerDay}</p>
                </div>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Home;