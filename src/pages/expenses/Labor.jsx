import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";

function Labor() {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton onClick={() => navigate("/expenses/add")} />
      <div>Labor</div>
    </div>
  );
}

export default Labor;
