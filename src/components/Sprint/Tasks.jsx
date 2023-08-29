import React from "react";
import Task from "./Task.jsx";

const Tasks = ({tasks, section, moveTask}) => {
    return (
        <div>
            <h2>{section} Tasks</h2>
            {tasks.filter(task => task.section == section).map((task) => (
                <Task task={task} key={task.id} moveTask={moveTask} />
            ))}
        </div>
    );
}

export default Tasks;