import React from "react";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Health from "../Health/Health";


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

    const totalCigarettes = useSelector((state) => {
        let singleDayCigarette =  state.authReducer.user.cigarettesPerDay;
        let quittingPer = quittingPeriod[0];
        return singleDayCigarette * quittingPer;
    } );

    const moneySaved = useSelector((state) => {
        let moneySaved = Math.floor(totalCigarettes/20) * state.authReducer.user.PacketPrice;
        return moneySaved;
    } );

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <div>
                    <h1>Home component after login</h1>
                    <p>Hello {user.name}</p>
                    <p>Your big day was {new Date(user.quittingDay).toDateString()}</p>
                    <p>Time somke free {`${quittingPeriod[0]}days, ${quittingPeriod[1]} hours, ${quittingPeriod[2]} minutes`}</p>
                    <p>Money saved is {`$${moneySaved} since your last puff.`}</p>
                    <p>Cigarettes not smoked are {`${totalCigarettes} since you quit`}</p>
                    </div>
                    <div>
                        <Link to="/edit-info">Edit info</Link>
                    </div>
                    <Health days={quittingPeriod[0]}/>
                </div>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Home;