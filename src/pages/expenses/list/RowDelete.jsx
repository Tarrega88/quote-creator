import { MdDeleteForever } from "react-icons/md";

function RowDelete({ text = "Delete", onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-8 cursor-pointer items-center justify-center rounded-md bg-red-700 transition-all duration-200 hover:bg-red-500"
    >
      <MdDeleteForever className="text-xl" />
    </button>
  );
}

export default RowDelete;
