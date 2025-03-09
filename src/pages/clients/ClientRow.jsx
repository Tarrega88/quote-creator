import { Link } from "react-router-dom";

function ClientRow({ clientName, colorIndex = 0 }) {
  const color = {
    0: "bg-slate-700 hover:bg-slate-600",
    1: "bg-slate-500 hover:bg-slate-400",
  };

  const clientUrl = clientName.replace(/\s/g, "_");
  //   console.log(clientUrl);

  return (
    <Link
      to={`/clients/${clientUrl}`}
      className={`${color[colorIndex]} flex h-8 items-center px-4 transition-all duration-300`}
    >
      {clientName}
    </Link>
  );
}

export default ClientRow;
