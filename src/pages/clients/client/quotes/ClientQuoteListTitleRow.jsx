function ClientQuoteListTitleRow() {
  return (
    <div className="grid h-10 w-full grid-cols-2 items-center justify-center bg-slate-700 pl-4">
      <div>Date Created</div>
      <div className="flex justify-around">
        <div className="flex w-18 justify-center">Edit</div>
        <div className="flex w-18 justify-center">View</div>
      </div>
    </div>
  );
}

export default ClientQuoteListTitleRow;
