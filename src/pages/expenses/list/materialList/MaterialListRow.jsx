function MaterialListRow({ data, odd }) {
  console.log(data);
  const {
    expenseName,
    measurementType,
    measurementUnit,
    costInDollars,
    unitAmount,
  } = data;

  //TODO 3/12/2025: add ability to edit/delete

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";

  return (
    <div className={`grid grid-cols-4 ${bgColor} py-1 pl-4`}>
      <span>{expenseName}</span>
      <span>{measurementType}</span>
      {/* <span>{measurementUnit}</span> */}
      <span>${costInDollars}</span>
      <span>
        {unitAmount} {measurementUnit}
      </span>
    </div>
  );
}

export default MaterialListRow;
