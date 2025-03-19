function ExpenseRow({ data, odd }) {
  const colors = odd ? "bg-slate-500" : "bg-slate-400";

  return (
    <li className={`flex gap-1 pl-2 ${colors} h-8 items-center`}>
      <div>{data}</div>
    </li>
  );
}

export default ExpenseRow;
