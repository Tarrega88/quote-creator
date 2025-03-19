import { useState } from "react";
import LeftColumnExpenses from "./LeftColumnExpenses";
import LeftColumnServices from "./LeftColumnServices";

function LeftColumn({ serviceList, expenseList }) {
  //TODO 3/19/2025: Make it so there's a services/expenses mode that changes the left column (and maybe middle)

  const [mode, setMode] = useState("Services");

  const dataChoice = {
    Services: serviceList,
    Expenses: expenseList,
  };

  const data = dataChoice[mode];

  console.log(data);

  const keys = Object.keys(data);
  console.log(keys);

  return (
    <div className="flex h-dvh flex-col gap-2 bg-slate-600 py-8">
      <div className="flex h-12 w-full items-center justify-center bg-slate-600">
        <button
          className="h-12 w-5/6 cursor-pointer rounded-md border-x-slate-400 bg-slate-700 transition-all duration-200 hover:bg-slate-500 active:bg-slate-400"
          onClick={() => setMode(mode === "Services" ? "Expenses" : "Services")}
        >
          {mode}
        </button>
      </div>
      {mode === "Expenses" ? (
        <LeftColumnExpenses data={data} />
      ) : (
        <LeftColumnServices />
      )}
    </div>
  );
}

export default LeftColumn;
