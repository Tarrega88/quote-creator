import { useState } from "react";
import TextInput from "../../ui/TextInput";
import HybridInput from "./HybridInput";
import AcceptButton from "../../ui/AcceptButton";

function CreateClientRow() {
  const [inputActive, setInputActive] = useState(false);
  const [buttonText, setButtonText] = useState("New Client");

  function handleCreateNewClient() {
    setInputActive(false);
  }

  function handleCancelNewClient() {
    setInputActive(false);
  }

  //   function newClientRowDisplay() {
  //     switch(inputActive) {
  //         case false: return  <button
  //         onClick={() => setInputActive(true)}
  //         className="h-full w-36 cursor-pointer bg-green-800 transition-all duration-200 hover:bg-green-700"
  //       >
  //         {buttonText}
  //       </button>;
  //       case true: return
  //     }
  //   }

  return (
    <div className="flex h-10 w-full items-center gap-8 bg-slate-500 px-4">
      {!inputActive ? (
        <button
          onClick={() => setInputActive(true)}
          className="h-full w-36 cursor-pointer bg-green-800 transition-all duration-200 hover:bg-green-700"
        >
          {buttonText}
        </button>
      ) : (
        <div className="flex h-full w-full items-center gap-6">
          <span>Client Name:</span>
          <HybridInput />
          <button
            className="h-4/5 w-24 cursor-pointer bg-green-800 transition-all duration-200 hover:bg-green-700"
            onClick={handleCreateNewClient}
          >
            Done
          </button>
          <button
            onClick={handleCancelNewClient}
            className="h-4/5 w-24 cursor-pointer bg-red-700 transition-all duration-200 hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateClientRow;
