import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesFile from "./ExpensesFile";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onExpensesFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFile items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
