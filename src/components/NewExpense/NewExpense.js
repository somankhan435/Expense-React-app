import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [isediting, setisediting] = useState(false);
  const savedExpenseData = (enteredexpensedata) => {
    const expensedata = {
      ...enteredexpensedata,
      id: Math.floor(Math.random()).toString(),
    };
    props.AddExpense(expensedata);
  };
  const starteditinghandler = () => {
    setisediting(true);
  };
  const stopeditinghandler = () => {
    setisediting(false);
  };
  return (
    <div className="new-expense ">
      {!isediting && (
        <button onClick={starteditinghandler}>Add New Expense</button>
      )}
      {isediting && <ExpenseForm EnteredFormData={savedExpenseData} onCancel={stopeditinghandler} />}
    </div>
  );
};
export default NewExpense;
