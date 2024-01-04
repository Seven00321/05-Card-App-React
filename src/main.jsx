import React from "react";
import ReactDOM from "react-dom/client";
import { CardApp } from "./CardApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    
    <React.StrictMode>
        {/* Rutas */}
        <BrowserRouter>
            <CardApp/>
        </BrowserRouter>
        
    </React.StrictMode>
);
