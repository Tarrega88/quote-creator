import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../../../ui/MainFlexContainer";

function QuoteEditView() {
  const { clientURL, quoteID } = useParams();
  console.log(clientURL, quoteID);

  return (
    <MainFlexContainer back={`/clients/${clientURL}`}>
      <div>Quote Edit</div>
      <div className="grid h-dvh w-dvw grid-cols-3">
        <div className="bg-sky-500"></div>
        <div className="bg-sky-600"></div>
        <div className="bg-sky-700"></div>
      </div>
    </MainFlexContainer>
  );
}

export default QuoteEditView;
