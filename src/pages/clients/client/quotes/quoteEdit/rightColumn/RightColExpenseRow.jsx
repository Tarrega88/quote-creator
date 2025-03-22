import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatUSD } from "../../../../../../helpers/formatUSD";
import { IoIosClose } from "react-icons/io";
import { removeClientQuoteExpenseData } from "../../../../../../store/slices/clientSlice";

function RightColExpenseRow({ data, odd, visible }) {
  const dispatch = useDispatch();
  const colors = odd ? "bg-slate-700" : "bg-slate-900";

  const { clientURL, quoteID } = useParams();

  function handleClick() {
    dispatch(
      removeClientQuoteExpenseData({ clientURL, quoteID, tempData: data }),
    );
  }

  const cost = formatUSD(data.costInDollars * data.multiple);
  return (
    <li
      className={`flex gap-1 pl-2 ${colors} ${visible ? "h-full py-2" : "h-0"} items-center`}
    >
      {visible && (
        <div className="flex w-full flex-col gap-1 pr-3">
          <div className="flex justify-between">
            <div>{data.expenseName}</div>
            <button
              className="flex w-8 items-center justify-center rounded-sm bg-slate-600 transition-all duration-200 hover:bg-slate-500"
              onClick={handleClick}
            >
              <IoIosClose className="cursor-pointer text-2xl" />
            </button>
          </div>
          <div>{cost}</div>
        </div>
      )}
    </li>
  );
}

export default RightColExpenseRow;
