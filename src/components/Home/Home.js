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

    const quittingPeriod = useSelector((state) => {
        let qt =  state.authReducer.user.quittingDay;
        let qtDate = new Date(qt);
        let today = new Date();
        let diff = today.getTime() - qtDate.getTime();
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return [days, hours, minutes];
    });

    

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Home component after login</h1>
                    <p>Hello {user.name}</p>
                    <p>{new Date(user.quittingDay).toDateString()}</p>
                    <p>{`days ${quittingPeriod[0]}, hours ${quittingPeriod[1]}, minutes ${quittingPeriod[2]}`}</p>
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