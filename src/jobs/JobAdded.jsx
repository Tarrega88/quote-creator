import { useSelector } from "react-redux";
import InstructionText from "../ui/InstructionText";
import Subtitle from "../ui/Subtitle";
import SquareButton from "../ui/SquareButton";
import { useNavigate } from "react-router-dom";

function JobAdded() {
  const client = useSelector((state) => state.quote.client);
  const navigate = useNavigate();

  return client.length > 0 ? (
    <div className="flex justify-center pt-8">
      <div className="flex flex-col gap-2">
        <InstructionText text="Job Added!" />
        <Subtitle
          text={`Add another job to ${client}'s quote or view quote?`}
        />
        <div className="flex justify-center gap-24 pt-8">
          <SquareButton text="Add Job" onClick={() => navigate("/edit")} />
          <SquareButton text="View Quote" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center pt-8">
      <div className="flex flex-col items-center gap-8">
        <InstructionText text="Looks like there's quote being worked on yet." />
        <SquareButton text="Home" onClick={() => navigate("/")} />
      </div>
    </div>
  );
}

export default JobAdded;
