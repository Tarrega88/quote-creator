import { useNavigate } from "react-router-dom";
import ClientListButton from "./ClientListButton";
import { FaCopy } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { useState } from "react";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import { useDispatch } from "react-redux";
import { setActiveClient } from "../../store/slices/clientSlice";

function ClientRow({ client, odd }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clientName, clientEmail, clientAddress, clientPhone, client_ } =
    client;
  const [copied, setCopied] = useState(false);
  const colors = odd ? "bg-slate-500" : "bg-slate-700";

  const iconStyle =
    "cursor-pointer text-slate-200 hover:text-slate-50 active:text-slate-300 transition-all duration-200";

  async function handleCopy() {
    const success = await copyToClipboard(clientEmail);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const clientURL = `/clients/${clientName.toLowerCase().replaceAll(" ", "_")}`;

  function handleClickMore() {
    // dispatch(setActiveClient());
    dispatch(setActiveClient(client_));
    navigate(clientURL);
  }

  return (
    <div
      // onClick={() => navigate(clientURL)}
      className={`grid h-10 grid-cols-[2fr_4fr_4fr_1fr] items-center px-4 ${colors} gap-2`}
    >
      <div>{clientName}</div>
      <div className="relative flex items-center gap-2">
        <div>{clientEmail}</div>
        {clientEmail.length > 0 &&
          (copied ? (
            <IoIosCheckmarkCircle className="text-lg text-green-600" />
          ) : (
            <FaCopy className={iconStyle} onClick={handleCopy} />
          ))}
      </div>
      <div>{clientPhone}</div>
      <div className="flex items-center justify-end gap-4">
        <ClientListButton text="More" onClick={handleClickMore} />
      </div>
    </div>
  );
}

export default ClientRow;
//left-1/2 -translate-x-1/2
