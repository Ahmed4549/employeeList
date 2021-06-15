import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import style from "./AddEmployee.module.css";

const AddUser = (props) => {
  const [enteredEmployeename, setEnteredEmployeename] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredRole, setEnteredRole] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredEmployeename.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredRole.trim().length === 0
    ) {
      setError({
        title: "Incomplete Input",
        message: "Please Enter Employee Name, Age or Role",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age Input",
        message: "Age Cannot be Nagetive",
      });
      return;
    }
    localStorage.setItem('Employee', enteredEmployeename)
    localStorage.setItem('Role', enteredRole)
    localStorage.setItem('Age', enteredAge)
    props.onAddUser(enteredEmployeename, enteredRole, enteredAge);
    setEnteredEmployeename("");
    setEnteredAge("");
    setEnteredRole("");
  };
  const dismissErrorHandler = () => {
    setError(null);
  };
  const employeeNameChangeHandler = (e) => {
    setEnteredEmployeename(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const employeeRoleChangeHandler = (e) => {
    setEnteredRole(e.target.value);
  };
  return (
    <div>
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="employeeName">Employee name</label>
          <input
            autoComplete="off"
            value={enteredEmployeename}
            onChange={employeeNameChangeHandler}
            type="text"
            id="employeeName"
            placeholder="Enter Employee Name"
          />
          <label htmlFor="employeeName">Role</label>
          <input
            autoComplete="off"
            value={enteredRole}
            onChange={employeeRoleChangeHandler}
            type="text"
            id="employeeName"
            placeholder="Enter Employee Role"
          />
          <label htmlFor="age">Age</label>
          <input
            autoComplete="off"
            value={enteredAge}
            onChange={ageChangeHandler}
            type="number"
            id="age"
            placeholder="Enter Age"
          />
          <Button type="submit">Add Employee</Button>
        </form>
      </Card>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          okayBtn={dismissErrorHandler}
        />
      )}
    </div>
  );
};

export default AddUser;
