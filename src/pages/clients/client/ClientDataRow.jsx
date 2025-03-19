import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import ClientEditInput from "./ClientEditInput";

function ClientDataRow({ section, data }) {
  const [editMode, setEditMode] = useState(false);

  const [tempEdit, setTempEdit] = useState(data);

  const display = {
    view: (
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="text-slate-300">{section}:</div>
          <div>{data}</div>
        </div>
        {section !== "Name" && (
          <FaEdit
            onClick={() => setEditMode(true)}
            className="cursor-pointer text-slate-50 transition-all duration-200 hover:text-slate-300"
          />
        )}
      </div>
    ),
    edit: (
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="text-slate-300">{section}:</div>
          <ClientEditInput
            onChange={(e) => setTempEdit(e.target.value)}
            value={tempEdit}
          />
        </div>
      </div>
    ),
  };

  return editMode ? display.edit : display.view;
}

export default ClientDataRow;
