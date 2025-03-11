import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";

function Materials() {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton onClick={() => navigate("/expenses/add")} />
      <div>Materials</div>
    </div>
  );
}

export default Materials;
