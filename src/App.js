import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "1",
    title: "Bike Insurance",
    amount: 2448.99,
    date: new Date(2019, 9, 16),
  },
  {
    id: "2",
    title: "Car Insurance",
    amount: 1257.87,
    date: new Date(2020, 9, 18),
  },
  {
    id: "3",
    title: "Helth Insurance",
    amount: 288.86,
    date: new Date(2021, 9, 9),
  },
  { id: "5", title: "New TV", amount: 5267.8, date: new Date(2023, 3, 18) },
  { id: "6", title: "Mobile", amount: 9865.8, date: new Date(2023, 4, 18) },
];

function App() {
  const [enteredExpense, setEnteredExpense] = useState(expenses);
  const addExpenseHandler = (newExpense) => {
    setEnteredExpense((prevExpense) => {
      return [...prevExpense, newExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={enteredExpense} />
    </div>
  );
}

export default App;
