import React, { useState } from "react";
import Card from "../UI/Card";
import style from "./EmployeeList.module.css";

const EmployeeList = (props) => {
  const [details, setDetails] = useState({
    empName: "",
    empRole: "",
    empAge: "",
  });
  const getDetails = () => {
    setDetails({
      empName: localStorage.getItem("Employee"),
      empRole: localStorage.getItem("Role"),
      empAge: localStorage.getItem("Age"),
    });
    setTimeout(() => {
      console.log(details);
    }, 3000);
  };
  return (
    <Card className={style.users}>
      <ul>
        {props.employees.map((employee, i) => (
          <li key={i}>
            Name: {employee.name} <br />
            Role: {employee.role} <br /> Age: {employee.age} y/o
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default EmployeeList;
