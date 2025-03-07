import { useState } from "react";
import InstructionText from "../ui/InstructionText";
import PriceRange from "../ui/PriceRange";
import SlideView from "../ui/SlideView";

function LandSurvey() {
  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  const surveyTypes = [
    { type: "" },
    { type: "Boundary", minCost: 300, maxCost: 900 },
    { type: "Topographic", minCost: 400, maxCost: 1500 },
    { type: "Fence", minCost: 200, maxCost: 1200 },
    { type: "ALTA", minCost: 1200, maxCost: 4000 },
    { type: "Mortgage", minCost: 200, maxCost: 700 },
    { type: "New Construction", minCost: 400, maxCost: 1800 },
    { type: "As-Built", minCost: 400, maxCost: 1500 },
    { type: "Plat", minCost: 400, maxCost: 800 },
    { type: "Plot Plan", minCost: 100, maxCost: 250 },
    { type: "Subdivision", minCost: 300, maxCost: 1000 },
  ];

  const [surveyType, setSurveyType] = useState("");

  const surveyData = surveyTypes.find((e) => e.type === surveyType);

  return (
    <div>
      <InstructionText text="Select a survey type" />
      <select
        className="bg-slate-700"
        onChange={(e) => setSurveyType(e.target.value)}
      >
        {surveyTypes.map((surveyType, i) => (
          <option key={i}>{surveyType.type}</option>
        ))}
      </select>
      {
        <SlideView isVisible={surveyType.length > 0}>
          <div>
            <InstructionText text="Select a price" />
            <div>
              {surveyType} surveys cost between ${surveyData.minCost}.00 & $
              {surveyData.maxCost}.00
            </div>
            <PriceRange
              surveyData={surveyData}
              min={surveyData.minCost}
              max={surveyData.maxCost}
              name={surveyData.type}
              key={surveyData.type}
              labelText="Change price:"
            />
          </div>
        </SlideView>
      }
    </div>
  );
}

export default LandSurvey;
