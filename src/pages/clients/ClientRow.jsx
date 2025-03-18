import { useNavigate } from "react-router-dom";
import ClientListButton from "./ClientListButton";

function ClientRow({ client, odd }) {
  const navigate = useNavigate();

  const colors = odd
    ? "bg-slate-500 hover:bg-slate-400"
    : "bg-slate-700 hover:bg-slate-600";

  console.log(client);

  const { clientName, clientEmail, clientAddress, clientPhone } = client;

  const clientURL = `/clients/${clientName.toLowerCase().replaceAll(" ", "_")}`;

  return (
    <div
      className={`grid h-10 cursor-pointer grid-cols-3 items-center px-4 transition-all duration-200 ${colors}`}
    >
      <div>{clientName}</div>
      <div>{clientEmail}</div>
      <div>{clientPhone}</div>
      {/* <div className="flex items-center justify-end gap-4">
      </div> */}
    </div>
  );
}

export default ClientRow;
