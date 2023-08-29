import React from "react";
import Tasks from "./Tasks.jsx";
import ProgressBar from "../ProgressBar.jsx";

const Sprint = ({tasks, sprint, moveTask}) => {
    return (
        <div className="section">
            <h1>Sprint</h1>
            <ProgressBar progress={sprint.progress} max={sprint.points} />
            <Tasks tasks={tasks} section="Backlog" moveTask={moveTask} />
            <Tasks tasks={tasks} section="Active" moveTask={moveTask} />
            <Tasks tasks={tasks} section="Complete" moveTask={moveTask} />
        </div>
    );
};

export default Sprint;