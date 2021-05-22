const ExpenseDate = ({ date }) => {
  const day = date.toLocaleString("us-US", { day: "2-digit" });
  const month = date.toLocaleString("us-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </>
  );
};

export default ExpenseDate;
