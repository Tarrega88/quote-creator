function ServiceExpenseRow({ expenseName, even, onClick }) {
  const colors = even
    ? "bg-slate-700 hover:bg-slate-600"
    : "bg-slate-500 hover:bg-slate-400";

  return (
    <div className={`${colors} w-4/5 cursor-pointer pl-4`} onClick={onClick}>
      {expenseName}
    </div>
  );
}

export default ServiceExpenseRow;
