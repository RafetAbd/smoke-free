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
                    <Route path="/" element={<Home />} />
                    <Route path="/edit-info" element={<EditInfo />} />                    
                </Routes>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            )} 
        </div>
    )
}

export default AllRoutes;


