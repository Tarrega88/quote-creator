import { useSelector } from "react-redux";
import MainFlexContainer from "../../ui/MainFlexContainer";
import HybridListRow from "./HybridListRow";
import CreateClientRow from "./CreateClientRow";
import HybridListOptions from "./HybridListOptions";

function HybridList() {
  const clientData = useSelector((state) => state.client);
  console.log(clientData);
  const clientNames = Object.keys(clientData.clients);
  console.log(clientNames);

  return (
    <MainFlexContainer back="/">
      <div>Hybrid List</div>
      <div className="h-full w-dvw">
        {/* <HybridListOptions /> */}
        <CreateClientRow />
        {clientNames.map((clientName, i) => (
          <HybridListRow data={clientData[clientName]} key={i} />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default HybridList;
