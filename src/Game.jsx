import React, {useEffect, useState} from "react";

import CompanySummary from "./components/CompanySummary.jsx";
import Sprint from "./components/Sprint.jsx";
import Team from "./components/Team.jsx";


const Game = () => {

    const [employees, setEmployees] = useState([{
        name: "CEO",
        code: 1,
        quantity: 1
    }]);

    const [tasks, setTasks] = useState([
        {
            progress: 0,
            max: 5
        }
    ]);

    const codePerSec = employees.map((employee) => employee.code*employee.quantity).reduce((a, b) => a+b);

    const doTic = () => {
        setTasks((prev) => {
            const newTasks = [...prev];
            newTasks.forEach((task) => {
                task.progress = Math.min(task.progress + codePerSec, task.max);
            });

            return newTasks;
        });
    }

    useEffect(() => {
        setInterval(doTic, 1000);
    },[]);

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

    return (
        <div id="game" className="main-content">
            <CompanySummary />
            <Sprint tasks={tasks} />
            <Team employees={employees} addEmployee={addEmployee} />
        </div>
    );
};

export default Game;