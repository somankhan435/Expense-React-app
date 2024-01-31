import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
    const dropdownChangehandler=()=>{
        const selectyear=document.getElementById('selectyear').value
    props.selectedyear(selectyear)
    }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select id="selectyear" value={props.select} onChange={dropdownChangehandler}>
        <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter
