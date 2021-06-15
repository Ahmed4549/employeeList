import React from "react";
import Card from "../UI/Card";
import style from "./EmployeeList.module.css";

const EmployeeList = (props) => {
  const deleteHandler = (key) => {
    console.log(key);
  };
  return (
    <Card className={style.users}>
      <ul>
        {props.employees.map((employee, i) => (
          <li key={i}>
            <div>
              <div className={style.userListHead}>Name:</div> {employee.name}
            </div>
            <div>
              <div className={style.userListHead}>Role:</div> {employee.role}{" "}
            </div>
            <div>
              <div className={style.userListHead}>Age:</div> {employee.age} y/o
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default EmployeeList;
