import { useDispatch, useSelector } from "react-redux";
import AcceptButton from "../ui/AcceptButton";
import InstructionText from "../ui/InstructionText";
import TextInput from "../ui/TextInput";
import { createQuote } from "../quoteSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SquareButton from "../ui/SquareButton";
import BackButton from "../ui/BackButton";
import Dropdown from "../ui/Dropdown";
import { updateClient } from "../clientSlice";

function CreateNewQuote() {
  const [isNewClient, setIsNewClient] = useState(null);
  const [client, setClient] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clientData = useSelector((state) => state.client.clients);

  const clientNames = Object.keys(clientData);

  function backButtonClicked() {
    if (isNewClient === null) {
      navigate("/");
    } else {
      setIsNewClient(null);
    }
  }

  const isCurrentClient = useSelector((state) =>
    Object.hasOwn(state.client.clients, client),
  );

  function submitClient() {
    if (!client.length) return;
    dispatch(createQuote(client));
    dispatch(updateClient(client));
    navigate("/edit");
  }

  {
    return isNewClient === null ? (
      <div>
        <BackButton text="Back" onClick={backButtonClicked} />
        <div className="flex justify-center pt-8">
          <div className="flex flex-col gap-4">
            <InstructionText text="Is this for a new or existing client?" />
            <div className="flex justify-evenly">
              <SquareButton text="New" onClick={() => setIsNewClient(true)} />
              <SquareButton
                text="Existing"
                onClick={() => setIsNewClient(false)}
              />
            </div>
          </div>
        </div>
      </div>
    ) : isNewClient === false ? (
      <div>
        <BackButton text="Back" onClick={backButtonClicked} />
        <div className="flex justify-center">
          <div className="flex flex-col gap-4">
            <InstructionText text="Which client?" />
            <Dropdown
              options={["", ...clientNames]}
              onChange={(e) => setClient(e.target.value)}
            />
            <div className="self-center pt-4">
              <AcceptButton onClick={submitClient} />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <BackButton text="Back" onClick={backButtonClicked} />

        <div className="flex justify-center pt-12">
          <div className="flex flex-col gap-4">
            <InstructionText text="What is the client's name?" />
            <TextInput
              onChange={(e) => setClient(e.target.value)}
              onEnter={submitClient}
            />
            <div className="self-center pt-8">
              <AcceptButton onClick={submitClient} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewQuote;
