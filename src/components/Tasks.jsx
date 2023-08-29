import React from "react";

const Tasks = ({tasks}) => {
    return (
        <div>
            {tasks.map((task) => {
                
                const percent = task.progress / task.max * 100;

                return (
                    <div className="progress-bar">
                        <div style={{width: percent + "%"}}></div>
                        <span>{task.progress} / {task.max} ({percent.toFixed(2)}%)</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Tasks;