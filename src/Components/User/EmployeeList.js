import React from "react";
import Card from "../UI/Card";
import style from "./EmployeeList.module.css";

const EmployeeList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.employees.map((employee, i) => (
          <li key={i}>
            Name: {employee.name} <br/>Role: {employee.role} <br/> ({employee.age} y/o)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default EmployeeList;
