import { useState } from "react";
import MiddleColMaterial from "./expenses/material/MiddleColMaterial";

function MiddleColumn({ mainCategory, displayType, subCategory }) {
  //   const [expenseType, setExpenseType] = useState("materials");
  const displayOptions = {
    expenses: {
      materials: <MiddleColMaterial />,
    },
    services: {},
  };
  return <div className="flex flex-col"></div>;
}

export default MiddleColumn;
