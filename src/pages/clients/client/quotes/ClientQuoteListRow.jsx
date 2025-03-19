function ClientQuoteListRow({ data }) {
  console.log("Here");
  console.log(data);
  const { dateCreated } = data;

  const date = new Date(dateCreated);
  const legibleDate = date.toLocaleDateString("en-US");

  return (
    <div className="grid w-full grid-cols-2 justify-center">
      <div>{legibleDate}</div>
      <div>Test</div>
      <div>A</div>
      <div>B</div>
    </div>
  );
}

export default ClientQuoteListRow;
