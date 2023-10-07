import "../Charts/Chart";
import Chart from "../Charts/Chart";
const ExpensesChart = (props) => {
  const Chartdatapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for(const expense of props.expenses){
    const expensemonth = expense.date.getMonth() // I did this because i want to get the expense of that specific month
    Chartdatapoints[expensemonth].value += expense.amount
  }
  return <Chart datapoints={Chartdatapoints} />;
};
export default ExpensesChart;
