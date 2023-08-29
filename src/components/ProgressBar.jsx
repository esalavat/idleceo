import React from "react";

const ProgressBar = ({progress, max}) => {

    const percent = progress / max * 100;
    const complete = percent >= 100;

    return (
        <div className="progress-bar">
            <div style={{width: percent + "%"}} className={complete ? "complete" : ""}></div>
            <span>
                { complete 
                    ? <>Complete!</>
                    : <>{progress} / {max} ({percent.toFixed(2)}%)</>
                }                
            </span>
        </div>
    );
};

export default ProgressBar;