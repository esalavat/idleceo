import React, {useEffect, useState} from "react";
import {useInterval} from "./hooks/useInterval.jsx";

import CompanySummary from "./components/CompanySummary.jsx";
import Sprint from "./components/Sprint/Sprint.jsx";
import Team from "./components/Team.jsx";


const Game = () => {

    const [employees, setEmployees] = useState([{
        name: "CEO",
        code: 1,
        quantity: 1
    }]);

    const [sprint, setSprint] = useState({
        "id": 1,
        "name": "Sprint 1: The Beginning",
        "progress": 0,
        "points": 50,
        "tasks": [
            {
                "id": 1,
                "section": "Active",
                "name": "Task 1",
                "progress": 0,
                "points": 5
            },
            {
                "id": 2,
                "name": "Task 2",
                "section": "Backlog",
                "progress": 0,
                "points": 20
            },
            {
                "id": 3,
                "name": "Task 3",
                "section": "Backlog",
                "progress": 0,
                "points": 25
            }
        ]
    })

    const codePerSec = employees.map((employee) => employee.code*employee.quantity).reduce((a, b) => a+b);

    function doTic() {
        let toAdd = codePerSec;

        setSprint((prev) => {
            const newSprint = {...prev};
            const newTasks = [...prev.tasks];
            newTasks.filter(task => task.section == "Active").forEach((task) => {
                const amtToAdd = Math.min(toAdd, task.points - task.progress);
                task.progress = task.progress + amtToAdd;
                toAdd = toAdd - amtToAdd;
                if(isTaskComplete(task)) {
                    moveTask(task.id);
                }
            });

            return newSprint;
        });
    }

    useInterval(doTic, 1000);

    const addEmployee = (name) => {
        setEmployees((prev) => 
            {
                const index = prev.findIndex((emp) => emp.name == name);
                const updatedEmp = {...prev[index]};
                updatedEmp.quantity = updatedEmp.quantity + 1;
                
                return [...prev.slice(0, index), updatedEmp, ...prev.slice(index+1)];
            }
        );
    }

    const moveTask = (id) => {
        console.log(sprint.tasks, id);
        const curTask = sprint.tasks.filter(task => task.id == id)[0];
        const curSec = curTask.section;
        console.log(curTask, curSec);

        let newSec = curSec;
        switch(curSec) {
            case "Backlog":
                newSec = "Active";
                break;
            case "Active":
                if(isTaskComplete(curTask)) {
                    newSec = "Complete";
                    completeTask(curTask);
                } else {
                    newSec = "Backlog";
                }
                break;
        }

        console.log("Moving task " + id + " from " + curSec + " to " + newSec);

        moveTaskToSection(id, newSec);        
    }

    function moveTaskToSection(id, section) {
        setSprint((prev) => {
            const newSprint = {...prev};
            const newTasks = [...prev.tasks];
            newTasks.filter(task => task.id == id)[0].section = section;
            return newSprint;
        });
    }

    function isTaskComplete(task) {
        return task.progress >= task.points;
    }

    function completeTask(task) {
        updateSprint(task.points);
    }

    function updateSprint(points) {
        setSprint((prev) => {
            return {
                ...prev, 
                progress: prev.progress + points
            }
        });
    }

    return (
        <div id="game" className="main-content">
            <CompanySummary />
            <Sprint sprint={sprint} moveTask={moveTask} />
            <Team employees={employees} addEmployee={addEmployee} codePerSec={codePerSec} />
        </div>
    );
};

export default Game;