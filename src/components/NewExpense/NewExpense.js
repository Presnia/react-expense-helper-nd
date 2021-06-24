import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [isActive, setActive] = useState(true);

  const handleOnClick = () => setActive(false);

  return (
    <div className="new-expense">
      <button className={`${"new-expense__btn"} ${isActive ? "active" : ""}`}
              onClick={handleOnClick}
      >
        Add New Expense
      </button>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        isActive={isActive}
        setActive={setActive}
      />
    </div>
  )
};

export default NewExpense;