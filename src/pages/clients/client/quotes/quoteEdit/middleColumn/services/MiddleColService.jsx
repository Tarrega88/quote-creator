import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MiddleColTitle from "../MiddleColTitle";
import MiddleColServiceEdit from "./MiddleColServiceEdit";
import MidColNumSelect from "../MidColNumSelect";
import { formatUSD } from "../../../../../../../helpers/formatUSD";
import { updateClientQuoteService } from "../../../../../../../store/slices/clientSlice";

function MiddleColService() {
  const tempData = useSelector((state) => state.column.tempData);
  const dispatch = useDispatch();

  const { clientURL, quoteID } = useParams();

  // console.log("tempData");
  // console.log(tempData);

  //TODO 3/22/2025 - if I can get payment model to determine some data here,
  //then I can probably replace the expense versions of this component with just 1 as well
  //would involve setting payment model there too
  const { paymentModel } = tempData;

  // meas: { measurementType, measurementUnit, unitAmount }
  // time: { timeUnit, unitAmount }
  // flat: {}

  //all: category, multiple, pay, paymentModel, serviceCategory, serviceName
  //time and measurement: unitAmount
  //time: timeUnit
  //measurement: measurementType, measurementUnit

  const {
    category,
    multiple,
    pay,
    serviceCategory,
    serviceName,
    measurementType,
    measurementUnit,
    unitAmount,
    timeUnit,
  } = tempData;

  const totalCost = multiple * pay;
  const quoteUpdate = {
    clientURL,
    quoteID,
    tempData,
  };

  const midColNumText = {
    measurement: `How many ${measurementUnit?.replaceAll("_", " ")}?`,
    flat: "",
    time: `How many ${timeUnit}s will this service take?`,
  };

  return (
    <div className="flex h-dvh flex-col bg-slate-800 pt-10">
      <MiddleColTitle text={serviceName} />
      <div className="flex flex-col px-3 pt-16">
        <MiddleColServiceEdit tempData={tempData} />
        <div className="flex flex-col gap-5 bg-slate-700 py-4">
          <div className="px-2">{midColNumText[paymentModel]}</div>
          {paymentModel !== "flat" && (
            <MidColNumSelect
              minAmount={unitAmount}
              multiple={multiple}
              tempData={tempData}
            />
          )}
          <div className="flex items-center justify-between px-2">
            <div className="flex gap-2">
              <div>Cost: </div>
              <div>{formatUSD(totalCost)}</div>
            </div>
            <div className="pr-2">
              <button
                onClick={() => dispatch(updateClientQuoteService(quoteUpdate))}
                className="h-8 w-12 cursor-pointer bg-emerald-700 transition-all duration-200 hover:bg-emerald-600 active:bg-emerald-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleColService;
