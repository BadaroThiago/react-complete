import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const changeShowExpenseHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };

  if (showExpenseForm === false) {
    return (
      <div className="new-expense" onClick={changeShowExpenseHandler}>
        <button>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onChangeShowExpenseHandler={changeShowExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
