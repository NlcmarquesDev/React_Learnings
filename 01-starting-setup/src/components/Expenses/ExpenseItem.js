import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
export default function ExpenseItem(props) {
  // podia usar o destructuring  ({title, date, amount})
  // const [title, setTitle] = useState(props.title);
  // function clickHandler() {
  //   setTitle("Padel raquect");
  // }
  return (
    <li>
      <Card className="expense-item ">
        {/* // aqui usaria so o date, sem o props */}

        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
}

// export default ExpenseItem;
