import { useParams } from "react-router-dom";
import InstructionText from "../../../ui/InstructionText";
import SquareButton from "../../../ui/SquareButton";
import SquareButtonRow from "../../../ui/SquareButtonRow";

const unitsOfMeasurement = {
  area: {
    "Square Inches": "square_inches",
    "Square Feet": "square_feet",
    "Square Yards": "square_yards",
    Acres: "acres",
  },
  length: {
    Inches: "inches",
    Feet: "feet",
    Yards: "yards",
  },
  quantity: {
    Count: "count",
  },
  volume: {
    "Cubic Inches": "cubic_inches",
    "Cubic Feet": "cubic_feet",
    "Cubic Yards": "cubic_yards",
    Gallons: "gallons",
  },
  weight: {
    Ounces: "ounces",
    Pounds: "pounds",
    Tons: "tons",
  },
  quantity: {
    Count: "count",
  },
};

function UnitOfMeasurement({ chooseUnitOfMeasurement }) {
  const { measurementType } = useParams();
  const data = unitsOfMeasurement[measurementType];
  console.log(data);

  const keys = Object.keys(data);

  return (
    <div>
      {/* <InstructionText /> */}
      {/* <div className="grid grid-cols-2"> */}
      <SquareButtonRow>
        {keys.map((e, i) => (
          <SquareButton
            text={e}
            key={i}
            onClick={() => chooseUnitOfMeasurement(data[e])}
          />
        ))}
      </SquareButtonRow>
      {/* </div> */}
    </div>
  );
}

export default UnitOfMeasurement;
