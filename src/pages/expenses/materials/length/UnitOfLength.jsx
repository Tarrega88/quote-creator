import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";

/*
inch, foot, yard

*/
function UnitOfLength({ chooseLength }) {
  return (
    <div>
      <InstructionText text="What's the unit of measurement in?" />
      <div className="flex flex-col items-center gap-8 pt-8">
        <div className="flex gap-12">
          <SquareButton text="Inches" onClick={() => chooseLength("inches")} />
          <SquareButton text="Feet" onClick={() => chooseLength("feet")} />
          <SquareButton text="Yards" onClick={() => chooseLength("yards")} />
        </div>
      </div>
    </div>
  );
}

export default UnitOfLength;
