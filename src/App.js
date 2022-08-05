import React from "react";
import AllRoutes from "./Routes";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
    return (
        <div>
            <h1>Hello World!!</h1>
            <Navbar />
            <AllRoutes />
        </div>
    );
}

export default App;