import InstructionText from "../../ui/InstructionText";
import { useNavigate } from "react-router-dom";
import SquareButton from "../../ui/SquareButton";
import MainFlexContainer from "../../ui/MainFlexContainer";
import SquareButtonRow from "../../ui/SquareButtonRow";

function CreateNewQuote() {
  //TODO 3/8/2025: If a new client is entered with the same name as an existing client,
  //prompt the user and let them know that client already exists.
  //Give them the option to create a new quote for the existing client or to (auto or manual?) change the entered name

  const navigate = useNavigate();

  {
    return (
      <MainFlexContainer back="/quotes">
        <InstructionText text="Is this for a new or existing client?" />
        <SquareButtonRow>
          <SquareButton
            text="New"
            onClick={() => navigate("/quotes/create/new_client")}
          />
          <SquareButton
            text="Existing"
            onClick={() => navigate("/quotes/create/existing_client")}
          />
        </SquareButtonRow>
      </MainFlexContainer>
    );
  }
}

export default CreateNewQuote;
