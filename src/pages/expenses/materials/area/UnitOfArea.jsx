import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";

function UnitOfArea({ chooseUnitOfArea }) {
  return (
    <div>
      <InstructionText text="What's the unit of measurement in?" />
      <div className="flex flex-col items-center gap-8 pt-8">
        <div className="flex gap-12">
          <SquareButton
            text="Square Inches"
            onClick={() => chooseUnitOfArea("square_inches")}
          />
          <SquareButton
            text="Square Feet"
            onClick={() => chooseUnitOfArea("square_feet")}
          />
          <SquareButton
            text="Square Yards"
            onClick={() => chooseUnitOfArea("square_yards")}
          />
          <SquareButton
            text="Acres"
            onClick={() => chooseUnitOfArea("acres")}
          />
        </div>
      </div>
    </div>
  );
}

export default UnitOfArea;
