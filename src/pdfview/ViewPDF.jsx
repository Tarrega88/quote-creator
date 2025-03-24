import MainFlexContainer from "../ui/MainFlexContainer";
import { useNavigate, useParams } from "react-router-dom";
import PDFRender from "./PDFRender";
import BackButton from "../ui/BackButton";

function ViewPDF() {
  const { clientURL, quoteID } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="pb-8">
        <BackButton
          onClick={() => navigate(`/clients/${clientURL}/${quoteID}`)}
        />
      </div>
      <PDFRender />
    </div>
  );
}

export default ViewPDF;
