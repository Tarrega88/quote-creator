import { useState } from "react";
import MiddleColMaterial from "./expenses/material/MiddleColMaterial";
import { useSelector } from "react-redux";

function MiddleColumn() {
  //   const [expenseType, setExpenseType] = useState("materials");

  const selector = useSelector((state) => state.column);
  console.log("SELECTOR");
  console.log(selector);

  const { mainCategory, subCategory, selction } = selector;

  const expenseSelector = useSelector((state) => state.expense.expenses);
  console.log(expenseSelector);

  const serviceSelector = useSelector((state) => state.service.services);
  console.log(serviceSelector);

  const displayOptions = {
    expenses: {
      materials: <MiddleColMaterial />,
    },
    services: {},
  };
  return <div className="flex flex-col"></div>;
}

export default MiddleColumn;
