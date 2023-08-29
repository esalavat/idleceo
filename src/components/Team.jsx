import React from "react";

const Team = ({employees, addEmployee, codePerSec}) => {
    
    console.log(employees);
        
    return (
        <div className="section">
            <h1>Team</h1>
            <div className="stat-group">
                <div>
                    Code/sec: {codePerSec}
                </div>
            </div>
            <div className="code"></div>
            <div id="employees">
                <h2>Title(Quantity): Lines of Code Per second</h2>
                <ul>
                    {employees.map(employee => (
                        <li key={employee.name} style={{display: "flex", height: "2em"}}>
                            <div style={{flex: "0 0 auto", alignSelf: "center", marginRight: "1em"}}><button className="btn" onClick={() => addEmployee(employee.name)}>+</button></div>
                            <div style={{flex: "1 1 auto", alignSelf: "center"}}>{employee.name}({employee.quantity}): {employee.code}/sec</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Team;