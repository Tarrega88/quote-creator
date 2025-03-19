import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { useSelector } from "react-redux";
import ClientDataRow from "./ClientDataRow";
import { editClientData } from "../../../store/slices/clientSlice";

function Client() {
  const { clientURL } = useParams();
  console.log(clientURL);

  const allClientData = useSelector((state) => state.client);
  console.log(allClientData);

  const clientData = allClientData.clients[clientURL];
  console.log(clientData);

  const {
    clientAddress,
    clientCity,
    clientEmail,
    clientName,
    clientPhone,
    clientState,
    clientZip,
  } = clientData;

  return (
    <MainFlexContainer back="/clients">
      <div className="grid h-dvh w-dvw grid-cols-[2fr_3fr]">
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col gap-1 bg-slate-700 py-2 pl-4">
            <ClientDataRow
              section="Name"
              data={clientName}
              clientURL={clientURL}
            />
            <ClientDataRow
              section="Phone"
              data={clientPhone}
              clientURL={clientURL}
            />
            <ClientDataRow
              section="Email"
              data={clientEmail}
              clientURL={clientURL}
            />
          </div>
          <div className="flex flex-col gap-1 bg-slate-500 py-2 pl-4">
            <ClientDataRow
              section="Address"
              data={clientAddress}
              clientURL={clientURL}
            />
            <ClientDataRow
              section="City"
              data={clientCity}
              clientURL={clientURL}
            />
            <ClientDataRow
              section="State"
              data={clientState}
              clientURL={clientURL}
            />
            <ClientDataRow
              section="Zip"
              data={clientZip}
              clientURL={clientURL}
            />
          </div>
        </div>
        <div className=""></div>
      </div>
    </MainFlexContainer>
  );
}

export default Client;
