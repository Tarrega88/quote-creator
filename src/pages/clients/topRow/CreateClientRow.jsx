import { useState } from "react";
import HybridInput from "./HybridInput";
import { useDispatch } from "react-redux";
import { createClient } from "../../../store/slices/clientSlice";
import FadeMessage from "../../../ui/FadeMessage";
import MainRow from "./MainRow";
import CreateClientInputRow from "./CreateClientInputRow";

function CreateClientRow({
  clientNames,
  displayMode,
  setDisplayMode,
  setSearchText,
}) {
  const dispatch = useDispatch();

  const [tempNewClient, setTempNewClient] = useState("");

  const [showFade, setShowFade] = useState(false);
  const [showNewCustomerFade, setShowNewCustomerFade] = useState(false);
  const [fadeText, setFadeText] = useState(false);

  const lowerCaseClients = clientNames.map((e) => e.toLowerCase());

  function handleCreateNewClient() {
    if (!tempNewClient.length) return;
    if (lowerCaseClients.includes(tempNewClient.toLowerCase().trim())) {
      setFadeText(`${tempNewClient} is already a client.`);
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }
    setFadeText("Client added!");
    setShowNewCustomerFade(true);
    setTimeout(() => setShowNewCustomerFade(false), 5000);
    dispatch(createClient(tempNewClient.trim()));
    setDisplayMode("main");
  }

  function handleCancel() {
    setDisplayMode("main");
  }

  const display = {
    main: (
      <MainRow
        setDisplayMode={setDisplayMode}
        fadeText={fadeText}
        showNewCustomerFade={showNewCustomerFade}
      />
    ),
    newClient: (
      <CreateClientInputRow
        setTempNewClient={setTempNewClient}
        handleCreateNewClient={handleCreateNewClient}
        handleCancel={handleCancel}
        fadeText={fadeText}
        showFade={showFade}
      />
    ),
    searchClients: (
      <div className="grid h-12 grid-cols-2 bg-slate-400 px-4">
        <div className="flex items-center gap-4">
          <span>Search:</span>
          <HybridInput onChange={(e) => setSearchText(e.target.value)} />
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={handleCancel}
            className="h-4/5 w-24 cursor-pointer bg-neutral-600 shadow-sm transition-all duration-200 hover:bg-neutral-500"
          >
            Cancel
          </button>
        </div>
      </div>
    ),
  };

  return display[displayMode];
}

export default CreateClientRow;

// import { useState } from "react";
// import HybridInput from "./HybridInput";
// import { useDispatch } from "react-redux";
// import { createClient } from "../../store/slices/clientSlice";
// import FadeMessage from "../../ui/FadeMessage";

// function CreateClientRow({ clientNames }) {
//   const dispatch = useDispatch();
//   const [inputActive, setInputActive] = useState(false);

//   const [tempNewClient, setTempNewClient] = useState("");

//   const [showFade, setShowFade] = useState(false);
//   const [showNewCustomerFade, setShowNewCustomerFade] = useState(false);
//   const [fadeText, setFadeText] = useState(false);

//   const lowerCaseClients = clientNames.map((e) => e.toLowerCase());

//   function handleCreateNewClient() {
//     if (!tempNewClient.length) return;
//     if (lowerCaseClients.includes(tempNewClient.toLowerCase().trim())) {
//       setFadeText(`${tempNewClient} is already a client.`);
//       setShowFade(true);
//       if (!showFade) setTimeout(() => setShowFade(false), 5000);
//       return;
//     }
//     setFadeText("Client added!");
//     setShowNewCustomerFade(true);
//     setTimeout(() => setShowNewCustomerFade(false), 5000);
//     dispatch(createClient(tempNewClient.trim()));
//     setInputActive(false);
//   }

//   function handleCancelNewClient() {
//     setInputActive(false);
//   }

//   return (
//     <div className="flex h-12 w-full items-center justify-between gap-8 bg-slate-400 px-4">
//       {!inputActive ? (
//         <div className="flex h-10 items-center gap-4">
//           <button
//             onClick={() => setInputActive(true)}
//             className="h-4/5 w-36 cursor-pointer bg-green-800 transition-all duration-200 hover:bg-green-700"
//           >
//             New Client
//           </button>
//           <FadeMessage text={fadeText} display={showNewCustomerFade} />
//         </div>
//       ) : (
//         <>
//           <div className="flex h-full items-center gap-4">
//             <span className="w-72">Client Name:</span>
//             <HybridInput
//               onChange={(e) => setTempNewClient(e.target.value)}
//               onEnter={handleCreateNewClient}
//             />
//             <div className="flex h-10 w-full items-center justify-between gap-8 bg-slate-400">
//               <FadeMessage text={fadeText} display={showFade} />
//               {/* <FadeMessage text={fadeText} display={showNewCustomerFade} /> */}
//             </div>
//           </div>
//           <div className="flex h-full items-center gap-8 overflow-auto">
//             <button
//               className="h-4/5 w-24 cursor-pointer bg-green-800 shadow-sm transition-all duration-200 hover:bg-green-700"
//               onClick={handleCreateNewClient}
//             >
//               Done
//             </button>
//             <button
//               onClick={handleCancelNewClient}
//               className="h-4/5 w-24 cursor-pointer bg-neutral-600 shadow-sm transition-all duration-200 hover:bg-neutral-500"
//             >
//               Cancel
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default CreateClientRow;
