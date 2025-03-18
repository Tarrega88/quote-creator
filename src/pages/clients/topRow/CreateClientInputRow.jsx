import FadeMessage from "../../../ui/FadeMessage";
import HybridInput from "./HybridInput";

function CreateClientInputRow({
  setTempNewClient,
  handleCreateNewClient,
  handleCancel,
  fadeText,
  showFade,
}) {
  return (
    <div className="grid h-12 grid-cols-3 items-center bg-slate-400 px-4">
      <div className="flex h-full items-center gap-4">
        <span className="">Client Name:</span>
        <HybridInput
          onChange={(e) => setTempNewClient(e.target.value)}
          onEnter={handleCreateNewClient}
        />
      </div>
      <div className="flex h-10 w-full items-center justify-between gap-8 bg-slate-400">
        <FadeMessage text={fadeText} display={showFade} />
      </div>
      <div className="flex h-full items-center justify-end gap-4">
        <button
          className="h-4/5 w-24 cursor-pointer bg-green-800 shadow-sm transition-all duration-200 hover:bg-green-700"
          onClick={handleCreateNewClient}
        >
          Done
        </button>
        <button
          onClick={handleCancel}
          className="h-4/5 w-24 cursor-pointer bg-neutral-600 shadow-sm transition-all duration-200 hover:bg-neutral-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CreateClientInputRow;
