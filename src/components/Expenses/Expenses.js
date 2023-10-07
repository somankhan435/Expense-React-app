import "./Expenses.css";
import Card from "../UI/card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [FilterYear, SetFilterYear] = useState("2020");

  const FilterChagneHandler = (year) => {
    SetFilterYear(year);
  };
  const filteredExpenses= props.items.filter((expenses)=>{
    return expenses.date.getFullYear().toString()===FilterYear
  })
 
  return (
    <Card className="expenses">
      <ExpenseFilter select={FilterYear} selectedyear={FilterChagneHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />

    </Card>
  );
};
export default Expenses;
