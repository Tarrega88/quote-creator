import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";
import SquareButtonRow from "../../../../ui/SquareButtonRow";

function UnitOfLength({ chooseLength }) {
  return (
    <div>
      <InstructionText text="What's the unit of measurement in?" />
      <div className="pt-8">
        <SquareButtonRow>
          <SquareButton text="Inches" onClick={() => chooseLength("inches")} />
          <SquareButton text="Feet" onClick={() => chooseLength("feet")} />
          <SquareButton text="Yards" onClick={() => chooseLength("yards")} />
        </SquareButtonRow>
      </div>
    </div>
  );
}

export default UnitOfLength;
