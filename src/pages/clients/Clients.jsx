import { useSelector } from "react-redux";
import ClientRow from "./ClientRow";
import Header from "../../ui/Header";
import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import { setCurrPage, setPrevPage } from "../pageSlice";

function Clients() {
  const clientData = useSelector((state) => state.client);
  const clientNames = Object.keys(clientData.clients).sort();
  const navigate = useNavigate();

  const prevPage = useSelector((state) => state.page.prevPage);

  function handleBackButon() {
    navigate(prevPage);
    setPrevPage("/"); //this may be unneeded
    setCurrPage("/");
  }

  return (
    <div>
      <BackButton onClick={handleBackButon} />
      <Header text="Client List" />
      <div className="flex flex-col">
        <div>
          {clientNames.map((client, i) => (
            <ClientRow clientName={client} colorIndex={i % 2} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
