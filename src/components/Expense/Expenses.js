import React, {useState} from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {

  const [filteredYear, setFilterYear]=useState("");
  

  const expenseFilterHandler =(selectedYear)=>{
    setFilterYear(selectedYear);
  }
  const filteredExpense =props.expenses.filter((expense) => {
    return (expense.date.getFullYear().toString() === filteredYear.toString());
      
  });
  
  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpense} />
      <ExpenseFilter selected={filteredYear} onExpenseFilter={expenseFilterHandler} />
     <ExpenseList items={filteredYear && filteredYear!="Select Year" ? filteredExpense :props.expenses}/>
    </Card>
  );
};

export default Expenses;
