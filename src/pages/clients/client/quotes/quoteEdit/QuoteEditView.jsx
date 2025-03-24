import { useNavigate, useParams } from "react-router-dom";
import MainFlexContainer from "../../../../../ui/MainFlexContainer";
import { useSelector } from "react-redux";
import LeftColumn from "./leftColumn/LeftColumn";
import MiddleColumn from "./middleColumn/MiddleColumn";
import RightColumn from "./rightColumn/RightColumn";

function QuoteEditView() {
  const { clientURL, quoteID } = useParams();
  const navigate = useNavigate();

  // const { mainCategory } = useSelector((state) => state.column);

  //TODO 3/20/2025: Consider making it so middle col does not change on main category switch
  //probably unnecessary though

  const clientsList = useSelector((state) => state.client.clients);
  const expenseList = useSelector((state) => state.expense.expenses);
  const serviceList = useSelector((state) => state.service.services);

  const quoteData = clientsList[clientURL].quotes[quoteID];

  return (
    <MainFlexContainer back={`/clients/${clientURL}`}>
      <button
        onClick={() => navigate(`/clients/${clientURL}/${quoteID}/view`)}
        className="h-12 w-32 cursor-pointer rounded-md bg-sky-600 transition-all duration-200 hover:bg-sky-500"
      >
        View Quote
      </button>
      <div className="grid w-dvw grid-cols-[3fr_4fr_3fr]">
        <LeftColumn serviceList={serviceList} expenseList={expenseList} />
        <MiddleColumn />
        <RightColumn />
        {/* <div className="col-span-3">
          <PDFRender />
        </div> */}
      </div>
    </MainFlexContainer>
  );
}

export default QuoteEditView;
