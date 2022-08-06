import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import EditInfo from "./components/EditInfo/EditInfo";

const AllRoutes = () => {

    const isLoggedIn = useSelector((state) => {
        return !!state.authReducer.user.id;
    });

    return (
        <div>
            {isLoggedIn ? (
                <Routes>
                    <Route path="/edit-info" element={<EditInfo />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Navigate to="/" />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            )} 
        </div>
    )
}

export default AllRoutes;


