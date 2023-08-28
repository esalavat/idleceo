import React from "react";
import CompanySummary from "./components/CompanySummary.jsx";
import Sprint from "./components/Sprint.jsx";
import Company from "./components/Company.jsx";


const Game = () => {
    return (
        <div id="game" className="main-content">
            <CompanySummary />
            <Sprint />
            <Company />
        </div>
    );
};

export default Game;