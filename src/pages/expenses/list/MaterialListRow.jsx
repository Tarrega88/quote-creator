function MaterialListRow({ data }) {
  console.log(data);
  const {
    materialName,
    measurementType,
    measurementUnit,
    costInDollars,
    unitAmount,
  } = data;

  return (
    <div className="grid grid-cols-5">
      <span>{materialName}</span>
      <span>{measurementType}</span>
      <span>{measurementUnit}</span>
      <span>{costInDollars}</span>
      <span>{unitAmount}</span>
    </div>
  );
}

export default MaterialListRow;
