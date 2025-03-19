function ClientQuoteListRow({ data, odd }) {
  console.log("Here");
  console.log(data);
  const { dateCreated } = data;

  const date = new Date(dateCreated);
  const legibleDate = date.toLocaleDateString("en-US");

  const colors = odd ? "bg-slate-600" : "bg-slate-700";

  //TODO 3/19/2025: Work/Edit button for working on quote
  //View button for viewing PDF version of quote

  return (
    <div
      className={`${colors} grid h-10 w-full grid-cols-2 items-center justify-center pl-4`}
    >
      <div>{legibleDate}</div>
      <div className="flex justify-around">
        <button className="w-18 cursor-pointer bg-emerald-700 transition-all duration-200 hover:bg-emerald-600">
          Edit
        </button>
        <button className="w-18 cursor-pointer bg-sky-600 transition-all duration-200 hover:bg-sky-500">
          View
        </button>
      </div>
    </div>
  );
}

export default ClientQuoteListRow;
