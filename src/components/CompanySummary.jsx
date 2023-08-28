import React from "react";

const CompanySummary = () => {
    return (
        <div className="section">
            <h1>Company Summary</h1>
            <div className="stat-group">
                <div>
                    Money: $<span id="counter">0</span>
                </div>
                <div>
                    Product: <span id="product">0</span>
                </div>
                <div>
                    Reputation: <span id="reputation">0</span>
                </div>
            </div>
        </div>
    );
};

export default CompanySummary;