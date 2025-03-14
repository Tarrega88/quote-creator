import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";
import SquareButtonRow from "../../../../ui/SquareButtonRow";

function UnitOfArea({ chooseUnitOfArea }) {
  return (
    <div>
      <InstructionText text="What's the unit of measurement in?" />
      <div className="pt-8">
        <SquareButtonRow>
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
        </SquareButtonRow>
      </div>
    </div>
  );
}

export default UnitOfArea;
