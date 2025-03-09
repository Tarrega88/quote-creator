import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../ui/BackButton";

function ClientData() {
  const { clientUrl } = useParams();
  const clientName = clientUrl.replaceAll("_", " ");

  const navigate = useNavigate();

  return (
    <div>
      <BackButton onClick={() => navigate("/clients")} />
      <div>{clientName}</div>
    </div>
  );
}

export default ClientData;
