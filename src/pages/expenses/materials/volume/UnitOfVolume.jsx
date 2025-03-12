import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";

function UnitOfVolume({ chooseUnitOfVolume }) {
  return (
    <div>
      <InstructionText text="What's the unit of measurement in?" />
      <div className="flex flex-col items-center gap-8 pt-8">
        <div className="flex gap-12">
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
        </div>
      </div>
    </div>
  );
}

export default UnitOfVolume;
