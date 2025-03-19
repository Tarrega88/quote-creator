import ClientQuoteListRow from "./ClientQuoteListRow";

function ClientQuoteList({ clientData }) {
  console.log("clientData");
  console.log(clientData);

  const { quotes } = clientData;
  const quotesReversed = quotes.reverse();
  console.log("Quotes");
  console.log(quotes);

  return (
    <div className="px-4 pt-4">
      {quotesReversed.map((e, i) => (
        <ClientQuoteListRow key={i} data={e} />
      ))}
    </div>
  );
}

export default ClientQuoteList;
