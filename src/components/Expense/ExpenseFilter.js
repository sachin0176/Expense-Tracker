import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter =(props) =>{

    const dropDownChangeHandler =(event) =>{
        props.onExpenseFilter(event.target.value);
    }
    return <div className="expense-filter">
        <div className="expense-filter__controls">
        <label>Filter by Year</label>
        <select value ={props.selected} onChange={dropDownChangeHandler}>
        <option>Select Year</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        </select>
        </div>
    </div>
}
export default ExpenseFilter;