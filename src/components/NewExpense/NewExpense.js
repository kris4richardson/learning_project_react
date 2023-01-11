import React, {useEffect, useState} from "react";
import ExpenseForm from "./ExpenseFrom";
import './NewExpense.css';

const NewExpense = (props) => {

const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  props.addNewExpense(expenseData);
};

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
}

export default NewExpense;