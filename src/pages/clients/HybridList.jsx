import { useSelector } from "react-redux";
import MainFlexContainer from "../../ui/MainFlexContainer";
import CreateClientRow from "./topRow/CreateClientRow";
import ClientRow from "./ClientRow";
import { useState } from "react";

function HybridList() {
  const clientSelector = useSelector((state) => state.client);
  const clientData = clientSelector.clients;
  const [displayMode, setDisplayMode] = useState("main");
  const [searchText, setSearchText] = useState("");

  console.log("Client Data");
  console.log(clientData);
  const clientNames =
    displayMode === "searchClients"
      ? Object.keys(clientData)
          .filter((e) =>
            e.toLowerCase().includes(searchText.trim().toLowerCase()),
          )
          .sort()
      : Object.keys(clientData).sort();
  console.log("Client Names");
  console.log(clientNames);

  return (
    <MainFlexContainer back="/">
      <div>Hybrid List</div>
      <div className="h-full w-dvw">
        <CreateClientRow
          clientNames={clientNames}
          displayMode={displayMode}
          setDisplayMode={setDisplayMode}
          setSearchText={setSearchText}
        />
        {/* <SearchClientRow /> */}
        {clientNames.map((clientName, i) => (
          <ClientRow client={clientData[clientName]} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default HybridList;
