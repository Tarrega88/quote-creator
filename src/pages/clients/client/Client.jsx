import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { useSelector } from "react-redux";

function Client() {
  const { clientURL } = useParams();
  console.log(clientURL);

  const allClientData = useSelector((state) => state.client);
  console.log(allClientData);

  const clientData = allClientData.clients[clientURL];
  console.log(clientData);

  return <MainFlexContainer back="/clients"></MainFlexContainer>;
}

export default Client;
