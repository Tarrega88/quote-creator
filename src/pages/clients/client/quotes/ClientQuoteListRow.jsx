import { useNavigate, useParams } from "react-router-dom";

function ClientQuoteListRow({ data, odd }) {
  const navigate = useNavigate();
  const { dateCreated } = data;

  const { clientURL } = useParams();

  const date = new Date(dateCreated);
  const legibleDate = date.toLocaleDateString("en-US");

  const colors = odd ? "bg-slate-700" : "bg-slate-600";

  //TODO 3/19/2025: Work/Edit button for working on quote
  //View button for viewing PDF version of quote

  return (
    <div
      className={`${colors} grid h-10 w-full grid-cols-2 items-center justify-center px-4`}
    >
      <div>{legibleDate}</div>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => navigate(`/clients/${clientURL}/${dateCreated}`)}
          className="w-18 cursor-pointer bg-emerald-700 transition-all duration-200 hover:bg-emerald-600"
        >
          Edit
        </button>
        <button
          onClick={() => navigate(`/clients/${clientURL}/view/${dateCreated}`)}
          className="w-18 cursor-pointer bg-sky-600 transition-all duration-200 hover:bg-sky-500"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default ClientQuoteListRow;
