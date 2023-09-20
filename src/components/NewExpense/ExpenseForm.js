import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });
    // setUserInput((prevState)=>
    // {
    //     return {...prevState,
    //     enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

const submitHandler =(event)=>{
    event.preventDefault();
    const expenseData={
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    };
    
    props.onSaveExpenseData(expenseData);
    setEnterdAmount("");
    setEnteredTitle("");
    setEnteredDate("");
}


  return (
    <form onSubmit={submitHandler} >
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="expense-form__action">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
