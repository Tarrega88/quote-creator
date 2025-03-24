import { IoMdArrowBack } from "react-icons/io";
function BackButton({ onClick, text = "Back" }) {
  return (
    <div className="flex h-10 w-18 justify-center rounded-br-md border-r border-b border-slate-600">
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-center rounded-br-md bg-slate-800 transition-all duration-200 hover:bg-slate-700"
      >
        <IoMdArrowBack className="text-2xl" />
      </button>
    </div>
  );
}

export default BackButton;
