import { useSelector } from "react-redux";
import MainFlexContainer from "../../ui/MainFlexContainer";
import CreateClientRow from "./topRow/CreateClientRow";
import ClientRow from "./ClientRow";
import { useState } from "react";
import InstructionText from "../../ui/InstructionText";

function HybridList() {
  const clientSelector = useSelector((state) => state.client);
  const clientData = clientSelector.clients;
  const [displayMode, setDisplayMode] = useState("main");
  const [searchText, setSearchText] = useState("");

  const { activeClient } = clientSelector;

  console.log("TEST 1");
  console.log(Object.keys(clientData));

  const clientNames =
    displayMode === "searchClients"
      ? Object.keys(clientData)
          .filter((e) =>
            e.toLowerCase().includes(searchText.trim().toLowerCase()),
          )
          .sort()
      : Object.keys(clientData)
          .filter((e) => e !== activeClient)
          .sort();

  console.log("CLIENT NAMES");
  console.log(clientNames);

  console.log("CLIENT Selector");
  console.log(clientSelector);

  return (
    <MainFlexContainer back="/">
      <InstructionText text="Client List" />
      <div className="h-full w-dvw">
        <CreateClientRow
          clientNames={clientNames}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
          setSearchText={setSearchText}
        />
        <div className="grid h-12 grid-cols-[2fr_4fr_4fr_1fr] items-center gap-2 bg-slate-700 px-4 text-lg font-medium tracking-wide">
          <div>Client</div>
          <div>Email</div>
          <div>Phone</div>
        </div>
        <ClientRow client={clientData[activeClient]} odd={true} />
        {clientNames.map((clientName, i) => (
          <ClientRow client={clientData[clientName]} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default HybridList;
