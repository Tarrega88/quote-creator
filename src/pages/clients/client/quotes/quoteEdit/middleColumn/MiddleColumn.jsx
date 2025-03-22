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
      materials: <MiddleColMaterial />,
      rentals: <MiddleColRental />,
      labor: <MiddleColLabor />,
    },
    services: {
      [subCategory]: <MiddleColService />,
    },
  };
  return subCategory && selection ? (
    displayOptions[mainCategory][subCategory]
  ) : (
    <div className="flex h-dvh flex-col bg-slate-800 py-8">
      <div className="flex h-12 w-full items-center justify-center">
        <div className="h-12 w-5/6 items-center text-center text-lg">
          Choose a service or expense from the left column
        </div>
      </div>
    </div>
  );
}

export default MiddleColumn;
