import './ExpensesList.css'
import ExpenseItem from './ExpenseItems'
const ExpensesList=(props)=>{

    if(props.item.length===0){
        return <h2 className='expenses-list__fallback'>No record Found.</h2>
    }
   return (<ul className='expenses-list'>

       {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        ))}
   </ul>)
    
}
export default ExpensesList