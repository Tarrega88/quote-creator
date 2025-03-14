import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../ui/Dropdown";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import AcceptButton from "../../ui/AcceptButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateClient } from "../../store/slices/clientSlice";
import { createQuote } from "../../store/slices/quoteSlice";

function ExistingClient() {
  const [client, setClient] = useState("");
  const clientData = useSelector((state) => state.client.clients);
  const clientNames = Object.keys(clientData).sort();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitClient() {
    if (!client.length) return;
    dispatch(createQuote(client));
    dispatch(updateClient(client));
    navigate("/quotes/edit");
  }
  return (
    <MainFlexContainer back="/quotes/create">
      <InstructionText text="Which client?" />
      <Dropdown
        options={["", ...clientNames]}
        onChange={(e) => setClient(e.target.value)}
      />
      <div className="self-center pt-4">
        <AcceptButton onClick={submitClient} />
      </div>
    </MainFlexContainer>
  );
}

export default ExistingClient;
