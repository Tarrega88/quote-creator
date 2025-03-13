function MaterialListRow({ data, odd }) {
  console.log(data);
  const {
    materialName,
    measurementType,
    measurementUnit,
    costInDollars,
    unitAmount,
  } = data;

  //TODO 3/12/2025: add ability to edit/delete

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";

  return (
    <div className={`grid grid-cols-4 ${bgColor} px-2 py-1`}>
      <span>{materialName}</span>
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
