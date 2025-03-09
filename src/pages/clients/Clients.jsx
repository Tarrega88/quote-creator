import { useSelector } from "react-redux";
import ClientRow from "./ClientRow";
import Header from "../../ui/Header";

function Clients() {
  const clientData = useSelector((state) => state.client);
  const clientNames = Object.keys(clientData.clients).sort();

  return (
    <div>
      <Header text="Client List" />
      <div className="flex flex-col">
        <div>
          {clientNames.map((client, i) => (
            <ClientRow clientName={client} colorIndex={i % 2} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
