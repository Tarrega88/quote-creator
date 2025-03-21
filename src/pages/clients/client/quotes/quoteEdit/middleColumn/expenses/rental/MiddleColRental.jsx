import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MiddleColTitle from "../../MiddleColTitle";
import MiddleColRentalEdit from "./MiddleColRentalEdit";
import MidColNumSelect from "../../MidColNumSelect";
import { formatUSD } from "../../../../../../../../helpers/formatUSD";
import { updateClientQuote } from "../../../../../../../../store/slices/clientSlice";

function MiddleColRental() {
  const tempData = useSelector((state) => state.column.tempData);
  const dispatch = useDispatch();

  const { costInDollars, expenseName, multiple, paidByThe } = tempData;

  const { clientURL, quoteID } = useParams();

  const totalCost = multiple * costInDollars;

  const quoteUpdate = { clientURL, quoteID, tempData };

  return (
    <div className="flex h-dvh flex-col bg-slate-800 pt-10">
      <MiddleColTitle text="Rental Expense" />
      <div className="flex flex-col px-3 pt-16">
        <MiddleColRentalEdit
          expenseName={expenseName}
          costInDollars={costInDollars}
          paidByThe={paidByThe}
        />
        <div className="flex flex-col gap-5 bg-slate-700 py-4">
          {paidByThe !== "flat" && (
            <div className="px-2">How many {expenseName}s will be rented?</div>
          )}
          {paidByThe !== "flat" && (
            <MidColNumSelect
              minAmount={1}
              multiple={multiple}
              tempData={tempData}
            />
          )}
          <div className="flex items-center justify-between px-2">
            <div className="flex gap-2">
              <div>Cost: </div>
              <div>{formatUSD(totalCost)}</div>
            </div>
            <div className="pr-2">
              <button
                onClick={() => dispatch(updateClientQuote(quoteUpdate))}
                className="h-8 w-12 cursor-pointer bg-emerald-700 transition-all duration-200 hover:bg-emerald-600 active:bg-emerald-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleColRental;
