import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RightColServices from "./RightColServices";
import RightColExpenses from "./RightColExpenses";
import { useState } from "react";
import { setQuoteTitle } from "../../../../../../store/slices/clientSlice";

function RightColumn() {
  const clientSelector = useSelector((state) => state.client.clients);
  // const [tempText, setTempText] = useState("");
  const dispatch = useDispatch();

  const { clientURL, quoteID } = useParams();

  const quoteData = clientSelector[clientURL].quotes[quoteID];

  const quoteHasName = quoteData.quoteTitle.length > 0;
  const quoteTitle = quoteData.quoteTitle;

  console.log(quoteHasName);

  const serviceKeys = Object.keys(quoteData.services);
  const hasExpense =
    Object.keys(quoteData.expenses.labor).length ||
    Object.keys(quoteData.expenses.rentals).length ||
    Object.keys(quoteData.expenses.materials).length;

  return (
    <div className="flex h-dvh flex-col overflow-auto bg-slate-600 py-8">
      <div className="flex h-12 w-full flex-col items-center justify-center bg-slate-600">
        <div className="flex h-12 w-5/6 items-center justify-center rounded-md text-center text-xl tracking-wide">
          Quote
        </div>
        <input
          className="bg-slate-800 text-center"
          placeholder="Name the Quote"
          value={quoteTitle}
          onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
          onChange={(e) =>
            dispatch(
              setQuoteTitle({ clientURL, quoteID, title: e.target.value }),
            )
          }
        ></input>
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
