import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import Expenses from "./components/ExpenseData/ExpenseData";

function App() {
  return (
    <div>
      <ExpenseItem
        date={Expenses[0].date}
        title={Expenses[0].title}
        amount={Expenses[0].amount}
      />
      <ExpenseItem
        date={Expenses[1].date}
        title={Expenses[1].title}
        amount={Expenses[1].amount}
      />
      <ExpenseItem
        date={Expenses[2].date}
        title={Expenses[2].title}
        amount={Expenses[2].amount}
      />
      <ExpenseItem
        date={Expenses[3].date}
        title={Expenses[3].title}
        amount={Expenses[3].amount}
      />
    </div>
  );
}

export default App;
