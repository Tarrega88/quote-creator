import RowDelete from "../RowDelete";

function RentalListRow({ data, odd, handleDelete }) {
  const { expenseType, expenseName, costInDollars, paidByThe } = data;

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";
  const flatOrTimeText =
    paidByThe === "flat" ? "flat rate" : `per ${paidByThe}`;

  return (
    <div className={`grid grid-cols-4 ${bgColor} py-1 pl-4`}>
      <span>{expenseName}</span>
      <span>{costInDollars}</span>
      <span>{flatOrTimeText}</span>
      <RowDelete onClick={() => handleDelete(expenseType, expenseName)} />
    </div>
  );
}

export default RentalListRow;
