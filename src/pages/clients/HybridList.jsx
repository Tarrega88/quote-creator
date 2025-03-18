import { useSelector } from "react-redux";
import MainFlexContainer from "../../ui/MainFlexContainer";
import CreateClientRow from "./CreateClientRow";
import HybridListOptions from "./HybridListOptions";
import ClientRow from "./ClientRow";

function HybridList() {
  const clientSelector = useSelector((state) => state.client);
  const clientData = clientSelector.clients;
  console.log("Client Data");
  console.log(clientData);
  const clientNames = Object.keys(clientData).sort();
  console.log("Client Names");
  console.log(clientNames);

  return (
    <MainFlexContainer back="/">
      <div>Hybrid List</div>
      <div className="h-full w-dvw">
        <CreateClientRow clientNames={clientNames} />
        {clientNames.map((clientName, i) => (
          <ClientRow client={clientData[clientName]} key={i} odd={i % 2} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default HybridList;
