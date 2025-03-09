import { useDispatch, useSelector } from "react-redux";
import AcceptButton from "../../ui/AcceptButton";
import InstructionText from "../../ui/InstructionText";
import TextInput from "../../ui/TextInput";
import { createQuote } from "../../quoteSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SquareButton from "../../ui/SquareButton";
import BackButton from "../../ui/BackButton";
import Dropdown from "../../ui/Dropdown";
import { updateClient } from "../../clientSlice";
import FadeMessage from "../../ui/FadeMessage";

function CreateNewQuote() {
  //TODO 3/8/2025: If a new client is entered with the same name as an existing client,
  //prompt the user and let them know that client already exists.
  //Give them the option to create a new quote for the existing client or to (auto or manual?) change the entered name

  const [isNewClient, setIsNewClient] = useState(null);
  const [client, setClient] = useState("");
  const [showFadeMessage, setShowFadeMessage] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clientData = useSelector((state) => state.client.clients);

  const clientNames = Object.keys(clientData).sort();

  function messageAlert(time, message) {
    setTimeout();
  }

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
    if (!client.match(/^[a-zA-Z0-9 ]+$/)) {
      setShowFadeMessage(true);
      if (!showFadeMessage) setTimeout(() => setShowFadeMessage(false), 8000);
      return;
    }
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
            <FadeMessage
              display={showFadeMessage}
              text="Client names can only be letters, numbers, and spaces."
            />
            <div className="self-center">
              <AcceptButton onClick={submitClient} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewQuote;
