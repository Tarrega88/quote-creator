function ExpenseRow({ data, odd, visible }) {
  const colors = odd
    ? "bg-slate-700 hover:bg-slate-600"
    : "bg-slate-900 hover:bg-slate-800";

  return (
    <li
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
