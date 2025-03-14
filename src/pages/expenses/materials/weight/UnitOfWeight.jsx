import InstructionText from "../../../../ui/InstructionText";
import SquareButton from "../../../../ui/SquareButton";
import SquareButtonRow from "../../../../ui/SquareButtonRow";
//ounces, pounds, tons
function UnitOfWeight({ chooseUnitOfWeight }) {
  return (
    <div>
      <InstructionText text="What's it weighed in?" />
      <div className="pt-8">
        <SquareButtonRow>
          <SquareButton
            text="Ounces"
            onClick={() => chooseUnitOfWeight("ounces")}
          />
          <SquareButton
            text="Pounds"
            onClick={() => chooseUnitOfWeight("pounds")}
          />
          <SquareButton
            text="Tons"
            onClick={() => chooseUnitOfWeight("tons")}
          />
        </SquareButtonRow>
      </div>
    </div>
  );
}

export default UnitOfWeight;

/*
inch, foot, yard
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


*/
