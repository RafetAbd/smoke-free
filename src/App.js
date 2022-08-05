import React from "react";
import AllRoutes from "./Routes";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <AllRoutes />
        </div>
    );
}

export default App;