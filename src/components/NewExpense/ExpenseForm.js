import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, SetEnteredTitle] = useState("");
  const [enteredAmount, SetEnteredAmount] = useState("");
  const [enteredDate, SetEnteredDate] = useState("");
  // const [userinput,Setuserinput]=useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:"",
  // })
  const TitleChangeHandler = (e) => {
    const title = document.getElementById("titleinput").value;
    SetEnteredTitle(title);
    // Setuserinput({
    //   ...userinput,
    //   enteredTitle:title,
    // });
    // console.log(userinput.enteredTitle)
    // // Setuserinput((prevstate)=>{
    //   return {
    //     ...prevstate,
    //     enteredTitle:title,
    //   }
    // })
  };
  const AmountChangeHandler = (e) => {
    const amount = document.getElementById("AmountInput").value;
    SetEnteredAmount(amount);
    // Setuserinput({
    //   ...userinput,
    //   enteredAmount:amount,
    // });
  };

  const DateChangeHandler = (e) => {
    const date = document.getElementById("DateInput").value;
    SetEnteredDate(date);
    // Setuserinput({
    //   ...userinput,
    //   enteredDate:date,
    // });
  };
  const InputChangeHandler = (identifier) => {
    if (identifier === "title") {
      const title = document.getElementById("titleinput").value;
      SetEnteredTitle(title);
    } else if (identifier === "amount") {
      const amount = document.getElementById("AmountInput").value;
      SetEnteredAmount(amount);
    } else if (identifier === "date") {
      const date = document.getElementById("DateInput").value;
      SetEnteredDate(date);
    }
  };
  const SubmitHandler=(event)=>{
  event.preventDefault();
  const expensedata={
    title:enteredTitle,
    amount:+enteredAmount,
    date:new Date(enteredDate),
  }
  props.EnteredFormData(expensedata)
  SetEnteredAmount("");
  SetEnteredDate("");
  SetEnteredTitle("");
  }
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            id="titleinput"
            value={enteredTitle}
            onChange={() => {
              InputChangeHandler("title");
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            id="AmountInput"
            value={enteredAmount}
            onChange={() => {
              InputChangeHandler("amount");
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            id="DateInput"
            value={enteredDate}
            onChange={() => {
              InputChangeHandler("date");
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
