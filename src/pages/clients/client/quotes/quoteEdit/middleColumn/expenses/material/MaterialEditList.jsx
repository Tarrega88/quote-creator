function MaterialEditList({
  currentCost,
  setCurrentCost,
  currentExpenseName,
  setCurrentExpenseName,
  currentUnitAmount,
  setCurrentUnitAmount,
}) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        <li>
          <span>Material: </span>
          <input
            className="bg-slate-600 px-1 text-slate-50"
            value={currentExpenseName}
            onChange={(e) => setCurrentExpenseName(e.target.value)}
          ></input>
        </li>
        <li>
          <span>Cost: </span>
          <input className="bg-slate-600 px-1 text-slate-50"></input>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default MaterialEditList;
