import React from "react";
import Tasks from "./Tasks.jsx";
import ProgressBar from "../ProgressBar.jsx";
import Loading from "../Loading.jsx";

const Sprint = ({sprint, moveTask}) => {
    return (    
        <div className="section">
            <h1>Sprint</h1>
            { sprint 
                ? <>
                    <ProgressBar progress={sprint.progress} max={sprint.points} />
                    <Tasks tasks={sprint.tasks} section="Backlog" moveTask={moveTask} />
                    <Tasks tasks={sprint.tasks} section="Active" moveTask={moveTask} />
                    <Tasks tasks={sprint.tasks} section="Complete" moveTask={moveTask} />
                </>
                : <Loading />
            }
        </div>
    );
};

export default Sprint;