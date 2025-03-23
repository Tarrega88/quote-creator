import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { states } from "../../helpers/stateArray";

function MyInfoRow({ text, onSubmit, title }) {
  const [editMode, setEditMode] = useState(false);
  const [tempText, setTempText] = useState(text);

  function handleEnter(e) {
    if (e.key !== "Enter") return;
    onSubmit(`my${title}`, tempText);
    setEditMode(false);
  }

  function handleSubmit() {
    onSubmit(`my${title}`, tempText);
    setEditMode(false);
  }

  const inputClass = editMode
    ? "bg-slate-400"
    : "bg-slate-700 hover:bg-slate-500 transition-all duration-200";

  return (
    <li className="">
      <div className="grid grid-cols-[3fr_6fr_1fr] items-center gap-2">
        <div className="flex gap-4">
          <div>{title}:</div>
        </div>
        <div className="flex w-48 items-center">
          {title === "State" ? (
            <select
              className={`h-8 w-48 ${inputClass} px-2`}
              onBlur={handleSubmit}
              onChange={(e) => setTempText(e.target.value)}
              value={tempText}
            >
              {states.map((e, i) => (
                <option key={i}>{e}</option>
              ))}
            </select>
          ) : (
            <input
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              onKeyDown={handleEnter}
              className={`h-8 w-48 pl-2 ${inputClass}`}
              onBlur={handleSubmit}
              onSelect={() => setEditMode(true)}
              autoFocus
            ></input>
          )}
        </div>
        {editMode && (
          <IoIosCheckmarkCircle className="cursor-pointer text-lg transition-all duration-200 hover:text-emerald-500" />
        )}
      </div>
    </li>
  );
}

export default MyInfoRow;
