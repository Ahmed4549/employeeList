import { useState } from "react";
import "./App.css";
import AddEmployee from "./Components/User/AddEmployee";
import UsersList from "./Components/User/EmployeeList";

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const addEmployeeHandler = (name, role, age) => {
    setEmployeeList((prevState) => {
      return [...prevState, { name: name, role: role, age: age }];
    });
  };
  return (
    <div className="app">
      <div className="app___Header">
        <h1>Employee List React App</h1>
        <p>Enter employee with their details (Name, Role & Age)</p>
      </div>
      <AddEmployee onAddUser={addEmployeeHandler} />
      {employeeList.length > 0 && <UsersList employees={employeeList} />}
    </div>
  );
}

export default App;