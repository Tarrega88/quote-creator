import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

function MyInfoRow({ text, onSubmit, title }) {
  const [editMode, setEditMode] = useState(false);
  const [tempText, setTempText] = useState(text);

  function handleEnter(e) {
    if (e.key !== "Enter") return;
    onSubmit(`my${title}`, tempText);
    setEditMode(false);
  }

  return (
    <li>
      {editMode ? (
        <div className="flex items-center justify-between">
          <div>{title}</div>
          <input
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            onKeyDown={handleEnter}
            className="bg-slate-500 pl-1"
            autoFocus
          ></input>
          <IoIosCheckmarkCircle />
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <div>{title}:</div>
            <div>{text}</div>
          </div>
          <FaEdit onClick={() => setEditMode(true)} />
        </div>
      )}
    </li>
  );
}

export default MyInfoRow;
