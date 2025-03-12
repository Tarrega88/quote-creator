import { useState } from "react";
import AcceptButton from "../../ui/AcceptButton";
import FadeMessage from "../../ui/FadeMessage";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import TextInput from "../../ui/TextInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createQuote } from "../../store/slices/quoteSlice";
import { updateClient } from "../../store/slices/clientSlice";

function NewClient() {
  const [client, setClient] = useState("");
  const [showFadeMessage, setShowFadeMessage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  return (
    <MainFlexContainer back="/create">
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
    </MainFlexContainer>
  );
}

export default NewClient;
