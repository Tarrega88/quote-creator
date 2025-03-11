import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import { useDispatch } from "react-redux";

function ClientData() {
  const { clientUrl } = useParams();
  const clientName = clientUrl.replaceAll("_", " ");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBack() {
    navigate("/clients");
  }

  return (
    <div>
      <BackButton onClick={handleBack} />
      <div>{clientName}</div>
    </div>
  );
}

export default ClientData;
