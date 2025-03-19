import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import ClientEditInput from "./ClientEditInput";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { editClientData } from "../../../store/slices/clientSlice";

function ClientDataRow({ section, data, clientURL }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const [tempEdit, setTempEdit] = useState(data);

  //state.clients[action.payload.clientURL][action.payload.dataType] = action.payload.dataEdit;

  function handleConfirmEdit(dataType, dataEdit) {
    dispatch(editClientData({ clientURL, dataType, dataEdit }));
    setEditMode(false);
  }

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
        <div className="flex items-center gap-1.5">
          <div className="text-slate-300">{section}:</div>
          <ClientEditInput
            onChange={(e) => setTempEdit(e.target.value)}
            value={tempEdit}
            onEnter={() => handleConfirmEdit(`client${section}`, tempEdit)}
          />
          <IoIosCheckmarkCircle
            onClick={() => handleConfirmEdit(`client${section}`, tempEdit)}
            className="cursor-pointer text-xl transition-all duration-200 hover:text-emerald-500"
          />
        </div>
      </div>
    ),
  };

  return editMode ? display.edit : display.view;
}

export default ClientDataRow;
