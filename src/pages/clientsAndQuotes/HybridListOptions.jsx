function HybridListOptions() {
  return (
    <div className="flex h-28 flex-col justify-center gap-4 bg-slate-700 px-4 py-2">
      {/* <div className="flex h-12 gap-4"> */}
      <div className="h-full">
        <button className="h-full w-32 cursor-pointer bg-green-700 transition-all duration-200 hover:bg-green-600">
          New Client
        </button>
      </div>
      <div className="h-full">
        <button className="h-full w-32 cursor-pointer bg-stone-600 transition-all duration-200 hover:bg-stone-500">
          Search Clients
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default HybridListOptions;
