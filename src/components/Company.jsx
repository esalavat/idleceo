import React from "react";

const Company = () => {
    return (
        <div className="section">
            <h1>Team</h1>
            <div className="stat-group">
                <div>
                    Code/sec: <span id="code-per-sec">1</span>
                </div>
            </div>
            <div className="code"></div>
            <div id="employees">
                <h2>Title(Quantity): Lines of Code Per second</h2>
                <ul>
                    <li data-code="1" data-quantity="1" data-name="CEO"></li>
                </ul>
            </div>
        </div>
    );
};

export default Company;