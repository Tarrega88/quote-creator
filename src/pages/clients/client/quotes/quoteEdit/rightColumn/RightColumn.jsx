import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RightColServices from "./RightColServices";
import LeftColumnServices from "../leftColumn/LeftColumnServices";
import RightColExpenses from "./RightColExpenses";

function RightColumn() {
  const clientSelector = useSelector((state) => state.client.clients);

  const { clientURL, quoteID } = useParams();
  console.log(clientSelector);

  const quoteData = clientSelector[clientURL].quotes[quoteID];
  console.log("HERE");
  console.log(quoteData);

  const serviceKeys = Object.keys(quoteData.services);
  const hasExpense =
    Object.keys(quoteData.expenses.labor).length ||
    Object.keys(quoteData.expenses.rentals).length ||
    Object.keys(quoteData.expenses.materials).length;

  return (
    <div className="flex h-dvh flex-col bg-slate-600 py-8">
      <div className="flex h-12 w-full items-center justify-center bg-slate-600">
        <div className="flex h-12 w-5/6 items-center justify-center rounded-md text-center text-xl tracking-wide">
          Quote
        </div>
      </div>
      <div className="flex flex-col pt-6">
        <div className="text-center text-2xl tracking-wide">Services</div>
        {serviceKeys.length ? (
          <RightColServices data={quoteData.services} />
        ) : (
          <div className="px-2 pt-2 text-center text-sm">
            No services added to quote yet...
          </div>
        )}
      </div>
      <div className="flex flex-col pt-6">
        <div className="text-center text-2xl tracking-wide">Expenses</div>
        {hasExpense ? (
          <RightColExpenses data={quoteData.expenses} />
        ) : (
          <div className="px-2 pt-2 text-center text-sm">
            No expenses added to quote yet...
          </div>
        )}
      </div>
    </div>
  );
}

export default RightColumn;

{
  /*
        <button
          className="h-12 w-5/6 cursor-pointer rounded-md border-x-slate-400 bg-slate-700 text-xl tracking-wide transition-all duration-200 hover:bg-slate-500 active:bg-slate-400"
          onClick={handleClick}
        >
          {title}
        </button>
      </div>
      {mainCategory === "expenses" ? (
        <LeftColumnExpenses data={data} />
      ) : (
        <LeftColumnServices data={data} />
      )}
    </div>
  );
}

export default LeftColumn;

    */
}
