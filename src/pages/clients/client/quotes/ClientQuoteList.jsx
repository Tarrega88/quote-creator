import { useParams } from "react-router-dom";
import ClientQuoteListRow from "./ClientQuoteListRow";
import ClientQuoteListTitleRow from "./ClientQuoteListTitleRow";
import { useDispatch } from "react-redux";
import { createNewQuote } from "../../../../store/slices/clientSlice";

function ClientQuoteList({ clientData }) {
  const dispatch = useDispatch();
  const { quotes } = clientData;
  const keys = Object.keys(quotes).reverse();

  const { clientURL } = useParams();

  return (
    <div className="px-4">
      <div className="flex h-12 items-center bg-slate-500 px-4">
        <button
          onClick={() => dispatch(createNewQuote(clientURL))}
          className="h-8 w-28 cursor-pointer bg-emerald-800 transition-all duration-200 hover:bg-emerald-700"
        >
          New Quote
        </button>
      </div>
      <ClientQuoteListTitleRow />
      {keys.map((e, i) => (
        <ClientQuoteListRow key={i} data={quotes[e]} odd={i % 2} />
      ))}
    </div>
  );
}

export default ClientQuoteList;
