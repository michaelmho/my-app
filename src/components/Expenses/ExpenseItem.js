import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ date, title, amount }) {
  const [newtitle, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newtitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
