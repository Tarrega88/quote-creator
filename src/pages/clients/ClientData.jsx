import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import { setCurrPage, setPrevPage } from "../pageSlice";
import { useDispatch } from "react-redux";

function ClientData() {
  const { clientUrl } = useParams();
  const clientName = clientUrl.replaceAll("_", " ");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(setPrevPage("/"));
    dispatch(setCurrPage("/clients"));
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
