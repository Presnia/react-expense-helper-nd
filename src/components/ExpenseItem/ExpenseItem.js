import "./ExpenseItem.css";

function ExpenseItem({ date, title, amount }) {
  const day = date.toLocaleString("us-US", { day: "2-digit" });
  const month = date.toLocaleString("us-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
