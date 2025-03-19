import ExpenseRow from "./ExpenseRow";

function ExpenseList({ title, data }) {
  console.log("DATA");
  console.log(data);
  const keys = Object.keys(data);

  //TODO 3/19/2025: make it so Materials, Rentals, and Labor
  //are clickable to expand/collapse their lists

  return (
    <div className="flex flex-col">
      <div className="py-4 text-center text-xl tracking-wide">{title}</div>
      <ul className="flex flex-col">
        {keys.map((e, i) => (
          <ExpenseRow data={e} key={i} odd={i % 2} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
