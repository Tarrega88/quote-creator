import { useDispatch } from "react-redux";
import {
  setSelection,
  setSubCategory,
} from "../../../../../../store/slices/columnSlice";

function ExpenseRow({ data, odd, visible, subCategory }) {
  const dispatch = useDispatch();
  const colors = odd
    ? "bg-slate-700 hover:bg-slate-600"
    : "bg-slate-900 hover:bg-slate-800";

  function handleClick() {
    dispatch(setSubCategory(subCategory));
    dispatch(setSelection(data));
  }

  return (
    <li
      onClick={handleClick}
      className={`flex gap-1 pl-2 ${colors} ${visible ? "h-8" : "h-0"} cursor-pointer items-center transition-all duration-300`}
    >
      {visible && <div>{data}</div>}
    </li>
  );
}

export default ExpenseRow;

// import { useState } from "react";

// function ExpenseRow({ data, odd }) {
//   const colors = odd ? "bg-slate-500" : "bg-slate-400";

//   const [visible, setVisible] = useState(false);

//   return (
//     <li className={`flex gap-1 pl-2 ${colors} h-8 items-center`}>
//       <div>{data}</div>
//     </li>
//   );
// }

// export default ExpenseRow;
