import RowDelete from "../RowDelete";

function MaterialListRow({ data, odd, handleDelete }) {
  const {
    expenseType,
    expenseName,
    measurementType,
    measurementUnit,
    costInDollars,
    unitAmount,
  } = data;

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";

  return (
    <div className={`grid grid-cols-5 ${bgColor} py-1 pl-4`}>
      <span>{expenseName}</span>
      <span>
        {measurementType} in {measurementUnit}
      </span>
      {/* <span>{measurementUnit}</span> */}
      <span>${costInDollars}</span>
      <span>
        {unitAmount} {measurementUnit}
      </span>
      <RowDelete onClick={() => handleDelete(expenseType, expenseName)} />
    </div>
  );
}

export default MaterialListRow;
