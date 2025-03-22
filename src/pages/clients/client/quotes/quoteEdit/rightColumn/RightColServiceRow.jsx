import { useDispatch } from "react-redux";
import { formatUSD } from "../../../../../../helpers/formatUSD";
import { useParams } from "react-router-dom";
import { removeClientQuoteServiceData } from "../../../../../../store/slices/clientSlice";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

function RightColServiceRow({ data, odd, visible }) {
  const dispatch = useDispatch();
  const colors = odd ? "bg-slate-700" : "bg-slate-900";

  const { clientURL, quoteID } = useParams();

  function handleClick() {
    dispatch(
      removeClientQuoteServiceData({ clientURL, quoteID, tempData: data }),
    );
  }

  const pay = formatUSD(data.pay * data.multiple);

  return (
    <li
      className={`flex gap-1 pl-2 ${colors} ${visible ? "h-full py-2" : "h-0"} items-center`}
    >
      {visible && (
        <div className="flex w-full flex-col gap-1 pr-3">
          <div className="flex justify-between">
            <div>{data.serviceName}</div>
            <button
              className="flex w-8 items-center justify-center rounded-sm bg-slate-600 transition-all duration-200 hover:bg-slate-500"
              onClick={handleClick}
            >
              <IoIosClose className="cursor-pointer text-2xl" />
            </button>
          </div>
          <div>{pay}</div>
        </div>
      )}
    </li>
  );
}

export default RightColServiceRow;
