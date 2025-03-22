import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import RightColServiceRow from "./RightColServiceRow";

function RightColServiceList({ title, data }) {
  const keys = Object.keys(data);
  const [visible, setVisible] = useState(true);

  return (
    <div className="border-y border-slate-200">
      <button
        onClick={() => setVisible(!visible)}
        className="rounted-t-md flex w-full cursor-pointer items-center justify-center bg-slate-700 py-4 text-xl tracking-wide transition-all duration-200 hover:bg-slate-500 active:bg-slate-400"
      >
        <span className="flex items-center gap-1">
          <span>{title}</span>
          <span>{visible ? <FaCaretUp /> : <FaCaretDown />}</span>
        </span>
      </button>
      <ul>
        {keys.map((e, i) => (
          <RightColServiceRow
            data={data[e]}
            dataName={data[e].serviceName}
            key={i}
            odd={i % 2}
            visible={visible}
            subCategory={title.toLowerCase()}
          />
        ))}
      </ul>
    </div>
  );
}

export default RightColServiceList;
