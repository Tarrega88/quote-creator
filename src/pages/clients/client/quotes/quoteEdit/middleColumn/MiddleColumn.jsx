import MiddleColMaterial from "./expenses/material/MiddleColMaterial";
import { useSelector } from "react-redux";
import MiddleColRental from "./expenses/rental/MiddleColRental";
import MiddleColLabor from "./expenses/labor/MiddleColLabor";
import MiddleColService from "./services/MiddleColService";

function MiddleColumn() {
  const selector = useSelector((state) => state.column);
  //   console.log("SELECTOR");
  //   console.log(selector);

  const { mainCategory, subCategory, selection } = selector;

  const expenseSelector = useSelector((state) => state.expense.expenses);
  console.log(expenseSelector);

  const serviceSelector = useSelector((state) => state.service.services);
  console.log(serviceSelector);

  const selectorChoice = {
    expenses: expenseSelector,
    services: serviceSelector,
  };

  //   const data =
  //     mainCategory === "expenses"
  //       ? expenseSelector[subCategory][selection]
  //       : serviceSelector[subCategory][selection];

  //   console.log("DATA");
  //   console.log(data);

  const data =
    subCategory && selection
      ? selectorChoice[mainCategory][subCategory][selection]
      : {};

  const displayOptions = {
    expenses: {
      materials: <MiddleColMaterial data={data} />,
      rentals: <MiddleColRental data={data} />,
      labor: <MiddleColLabor data={data} />,
    },
    services: {
      [subCategory]: <MiddleColService data={data} />,
    },
  };
  return subCategory && selection ? (
    displayOptions[mainCategory][subCategory]
  ) : (
    <div>Some Waiting Element</div>
  );
}

export default MiddleColumn;
