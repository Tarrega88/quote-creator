import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../../../ui/MainFlexContainer";
import { useSelector } from "react-redux";
import LeftColumn from "./leftColumn/LeftColumn";
import MiddleColumn from "./middleColumn/MiddleColumn";

function QuoteEditView() {
  const { clientURL, quoteID } = useParams();

  const clientsList = useSelector((state) => state.client.clients);
  const expenseList = useSelector((state) => state.expense.expenses);
  const serviceList = useSelector((state) => state.service.services);

  const quoteData = clientsList[clientURL].quotes[quoteID];

  return (
    <MainFlexContainer back={`/clients/${clientURL}`}>
      <div className="grid w-dvw grid-cols-[2fr_3fr_2fr]">
        {/* <div>A</div>
        <div>B</div>
        <div>C</div> */}
        <LeftColumn serviceList={serviceList} expenseList={expenseList} />
        <MiddleColumn />
        <div className="bg-sky-700"></div>
      </div>
    </MainFlexContainer>
  );
}

export default QuoteEditView;
