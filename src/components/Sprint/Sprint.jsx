import React from "react";
import Tasks from "./Tasks.jsx";
import ProgressBar from "../ProgressBar.jsx";

const Sprint = ({sprint, moveTask}) => {
    return (
        <div className="section">
            <h1>Sprint</h1>
            <ProgressBar progress={sprint.progress} max={sprint.points} />
            <Tasks tasks={sprint.tasks} section="Backlog" moveTask={moveTask} />
            <Tasks tasks={sprint.tasks} section="Active" moveTask={moveTask} />
            <Tasks tasks={sprint.tasks} section="Complete" moveTask={moveTask} />
        </div>
    );
};

export default Sprint;