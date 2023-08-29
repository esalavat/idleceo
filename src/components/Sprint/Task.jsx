import React from "react";
import ProgressBar from "../ProgressBar.jsx";

const Task = ({task, moveTask}) => {

    const percent = task.progress / task.points * 100;
    const complete = percent >= 100;

    return (
        <div className={"task" + (complete ? " complete" : "")} onClick={moveTask.bind(this, task.id)}>
            <h2>{task.name}</h2>
            <ProgressBar progress={task.progress} max={task.points} />
            <span>Points: {task.points}</span>
        </div>
    );
};

export default Task;