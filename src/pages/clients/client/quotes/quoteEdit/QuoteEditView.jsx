import { useParams } from "react-router-dom";
import MainFlexContainer from "../../../../../ui/MainFlexContainer";
import { useSelector } from "react-redux";
import LeftColumn from "./leftColumn/LeftColumn";
import InstructionText from "../../../../../ui/InstructionText";
import MiddleColumn from "./middleColumn/MiddleColumn";
import { useState } from "react";

function QuoteEditView() {
  const { clientURL, quoteID } = useParams();

  const [mainCategory, setMainCategory] = useState("expenses");
  const [subCategory, setSubCategory] = useState("");

  const clientsList = useSelector((state) => state.client.clients);
  const expenseList = useSelector((state) => state.expense.expenses);
  const serviceList = useSelector((state) => state.service.services);

  console.log("expenseList");
  console.log(expenseList);
  console.log("serviceList");
  console.log(serviceList);

  const quoteData = clientsList[clientURL].quotes[quoteID];
  console.log("quoteData");
  console.log(quoteData);

  return (
    <MainFlexContainer back={`/clients/${clientURL}`}>
      <div>Quote Edit</div>
      <div className="grid w-dvw grid-cols-3">
        {/* <div>A</div>
        <div>B</div>
        <div>C</div> */}
        <LeftColumn
          serviceList={serviceList}
          expenseList={expenseList}
          mainCategory={mainCategory}
          setMainCategory={setMainCategory}
          setSubCategory={setSubCategory}
        />
        <MiddleColumn mainCategory={mainCategory} subCategory={subCategory} />
        <div className="bg-sky-700"></div>
      </div>
    </MainFlexContainer>
  );
}

export default QuoteEditView;
