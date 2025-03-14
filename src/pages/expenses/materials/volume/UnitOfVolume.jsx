import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";
import SquareButtonRow from "../../../../ui/SquareButtonRow";

function UnitOfVolume({ chooseUnitOfVolume }) {
  return (
    <div>
      <InstructionText text="What's the unit of measurement in?" />
      <div className="pt-8">
        <SquareButtonRow>
          <SquareButton
            text="Cubic Inches"
            onClick={() => chooseUnitOfVolume("cubic_inches")}
          />
          <SquareButton
            text="Cubic Feet"
            onClick={() => chooseUnitOfVolume("cubic_feet")}
          />
          <SquareButton
            text="Cubic Yards"
            onClick={() => chooseUnitOfVolume("cubic_yards")}
          />
          <SquareButton
            text="Gallons"
            onClick={() => chooseUnitOfVolume("gallons")}
          />
        </SquareButtonRow>
      </div>
    </div>
  );
}

export default UnitOfVolume;
