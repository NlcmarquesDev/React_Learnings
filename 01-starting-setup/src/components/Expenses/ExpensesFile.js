import React from "react";
import "./ExpensesFile.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesFile(props) {
  let expensesContent = <p>No expenses found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        (expensesContent = props.items.map((expense) => (
          <ExpenseItem
            key={expense.id} // need always important to use a key form our data input
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))
      }
    </ul>
  );
}
export default ExpensesFile;
