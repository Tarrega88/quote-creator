import { useState } from "react";
import LeftColumnExpenses from "./LeftColumnExpenses";
import LeftColumnServices from "./LeftColumnServices";
import { useDispatch, useSelector } from "react-redux";
import {
  setMainCategory,
  setSelection,
  setSubCategory,
} from "../../../../../../store/slices/columnSlice";

function LeftColumn({ serviceList, expenseList }) {
  const dispatch = useDispatch();
  const { mainCategory } = useSelector((state) => state.column);
  const title = mainCategory === "services" ? "Services" : "Expenses";

  const dataChoice = {
    services: serviceList,
    expenses: expenseList,
  };

  const data = dataChoice[mainCategory];

  const keys = Object.keys(data);

  function handleClick() {
    dispatch(
      setMainCategory(mainCategory === "services" ? "expenses" : "services"),
    );
    dispatch(setSubCategory(""));
    dispatch(setSelection(""));
  }

  return (
    <div className="flex h-dvh flex-col overflow-auto bg-slate-600 py-8">
      <div className="flex h-12 w-full items-center justify-center bg-slate-600">
        <button
          className="h-12 w-5/6 cursor-pointer rounded-md border-x-slate-400 bg-slate-700 text-xl tracking-wide transition-all duration-200 hover:bg-slate-500 active:bg-slate-400"
          onClick={handleClick}
        >
          {title}
        </button>
      </div>
      {mainCategory === "expenses" ? (
        <LeftColumnExpenses data={data} />
      ) : (
        <LeftColumnServices data={data} />
      )}
    </div>
  );
}

export default LeftColumn;
