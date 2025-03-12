import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";

/*
inch, foot, yard, mile, meter, kilometer

*/
function UnitOfLength() {
  return (
    <div>
      <InstructionText text="What's the unit of measurement?" />
      <div className="flex flex-col items-center gap-8 pt-8">
        <div className="flex gap-12">
          <SquareButton text="Inches" />
          <SquareButton text="Feet" />
          <SquareButton text="Yard" />
        </div>
        <div className="flex gap-12">
          <SquareButton text="Meter" />
          <SquareButton text="Mile" />
          <SquareButton text="Kilometer" />
        </div>
      </div>
    </div>
  );
}

export default UnitOfLength;
