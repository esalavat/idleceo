import React from "react";
import Tasks from "./Tasks.jsx";

const Sprint = ({tasks}) => {
    return (
        <div className="section">
            <h1>Sprint</h1>
            <Tasks tasks={tasks} />
        </div>
    );
};

export default Sprint;