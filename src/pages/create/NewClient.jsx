import { useState } from "react";
import AcceptButton from "../../ui/AcceptButton";
import FadeMessage from "../../ui/FadeMessage";
import InstructionText from "../../ui/InstructionText";
import MainFlexContainer from "../../ui/MainFlexContainer";
import TextInput from "../../ui/TextInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createQuote } from "../../store/slices/quoteSlice";
import { updateClient } from "../../store/slices/clientSlice";

function NewClient() {
  const [client, setClient] = useState("");
  const [showFade, setShowFade] = useState(false);
  const [fadeText, setFadeText] = useState(
    "There's already a client with that name",
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { clients } = useSelector((state) => state.client);
  const clientNames = Object.keys(clients).map((e) => e.toLowerCase());

  function submitClient() {
    if (!client.length) return;
    if (!client.match(/^[a-zA-Z0-9 ]+$/)) {
      setFadeText("Client names can only be letters, numbers, and spaces.");
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }
    if (clientNames.includes(client.toLowerCase())) {
      setFadeText("There's already a client with that name");
      setShowFade(true);
      if (!showFade) setTimeout(() => setShowFade(false), 5000);
      return;
    }
    dispatch(createQuote(client));
    dispatch(updateClient(client));
    navigate("/quotes/edit");
  }
  return (
    <MainFlexContainer back="/quotes/create">
      <InstructionText text="What is the client's name?" />
      <TextInput
        onChange={(e) => setClient(e.target.value)}
        onEnter={submitClient}
      />
      <FadeMessage display={showFade} text={fadeText} />
      <div className="self-center">
        <AcceptButton onClick={submitClient} isActive={client.length > 0} />
      </div>
    </MainFlexContainer>
  );
}

export default NewClient;
