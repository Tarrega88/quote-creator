import FadeMessage from "../../../ui/FadeMessage";

function MainRow({ setDisplayMode, fadeText, showNewCustomerFade }) {
  return (
    <div className="grid h-12 grid-cols-2 items-center bg-slate-400 px-4">
      <div className="flex h-10 items-center gap-4">
        <button
          onClick={() => setDisplayMode("newClient")}
          className="h-4/5 w-36 cursor-pointer bg-green-800 transition-all duration-200 hover:bg-green-700"
        >
          New Client
        </button>
        <button
          onClick={() => setDisplayMode("searchClients")}
          className="h-4/5 w-36 cursor-pointer bg-stone-700 transition-all duration-200 hover:bg-stone-600"
        >
          Search
        </button>
      </div>
      <FadeMessage text={fadeText} display={showNewCustomerFade} />
    </div>
  );
}

export default MainRow;
