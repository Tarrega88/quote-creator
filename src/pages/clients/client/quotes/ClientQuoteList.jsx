import ClientQuoteListRow from "./ClientQuoteListRow";
import ClientQuoteListTitleRow from "./ClientQuoteListTitleRow";

function ClientQuoteList({ clientData }) {
  const { quotes } = clientData;
  const keys = Object.keys(quotes);

  return (
    <div className="px-4">
      <ClientQuoteListTitleRow />
      {keys.map((e, i) => (
        <ClientQuoteListRow key={i} data={quotes[e]} odd={i % 2} />
      ))}
    </div>
  );
}

export default ClientQuoteList;
