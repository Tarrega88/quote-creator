import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";

function Rentals() {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton onClick={() => navigate("/expenses/add")} />
      <div>Rentals</div>
    </div>
  );
}

export default Rentals;
