import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [form, setForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setForm(false);
  };
  const closeForm = () => setForm(false);
  const startEditingHandler = () => setForm(true);

  let buttonExpenses = (
    <button type="submit" onClick={startEditingHandler}>
      Add New Expense
    </button>
  );

  if (form === false) {
    return <div className="new-expense">{buttonExpenses}</div>;
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={closeForm}
        />
      </div>
    );
  }
}

export default NewExpense;
