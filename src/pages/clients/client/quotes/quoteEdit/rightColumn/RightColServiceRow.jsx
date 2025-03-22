import { useDispatch } from "react-redux";
import { formatUSD } from "../../../../../../helpers/formatUSD";
import { useParams } from "react-router-dom";
import { removeClientQuoteServiceData } from "../../../../../../store/slices/clientSlice";

function RightColServiceRow({ data, dataName, odd, visible, subCategory }) {
  const dispatch = useDispatch();
  const colors = odd
    ? "bg-slate-700 hover:bg-slate-600"
    : "bg-slate-900 hover:bg-slate-800";

  console.log("dataName");
  console.log(dataName);
  console.log(data);

  const { clientURL, quoteID } = useParams();

  function handleClick() {
    //   const { clientURL, quoteID, tempData } = action.payload;
    dispatch(
      removeClientQuoteServiceData({ clientURL, quoteID, tempData: data }),
    );
    //this will delete that data from the quote
  }

  const pay = formatUSD(data.pay * data.multiple);

  return (
    <li
      onClick={handleClick}
      className={`flex gap-1 pl-2 ${colors} ${visible ? "h-16" : "h-0"} cursor-pointer items-center transition-all duration-300`}
    >
      {visible && (
        <div className="flex flex-col">
          <div>{dataName}</div>
          <div>{pay}</div>
        </div>
      )}
    </li>
  );
}

export default RightColServiceRow;

{
  /*
function ServiceRow({ data, odd, visible, subCategory }) {
  const dispatch = useDispatch();
  const colors = odd

  return (
    <li
      onClick={handleClick}
      className={`flex gap-1 pl-2 ${colors} ${visible ? "h-8" : "h-0"} cursor-pointer items-center transition-all duration-300`}
    >
      {visible && <div>{data}</div>}
    </li>
  );
}

export default ServiceRow;

    */
}
