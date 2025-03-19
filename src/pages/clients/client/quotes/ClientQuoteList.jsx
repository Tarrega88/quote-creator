import ClientQuoteListRow from "./ClientQuoteListRow";
import ClientQuoteListTitleRow from "./ClientQuoteListTitleRow";

function ClientQuoteList({ clientData }) {
  const { quotes } = clientData;
  const quotesReversed = quotes.reverse();

  return (
    <div className="px-4">
      <ClientQuoteListTitleRow />
      {quotesReversed.map((e, i) => (
        <ClientQuoteListRow key={i} data={e} odd={i % 2} />
      ))}
    </div>
  );
}

export default ClientQuoteList;
