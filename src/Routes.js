import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const AllRoutes = () => {

    const isLoggedIn = () => {
        // return !!state.authReducer.user.id
        // return !!localStorage.getItem("token");
        return
    }
    return (
        <div>
            {/* {isLoggedIn() ? ( */}
            {isLoggedIn ? (
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            )}
        </div>
    )
}

export default AllRoutes;


