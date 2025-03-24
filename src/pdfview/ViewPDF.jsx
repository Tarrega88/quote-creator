import MainFlexContainer from "../ui/MainFlexContainer";
import { useNavigate, useParams } from "react-router-dom";
import PDFRender from "./PDFRender";
import BackButton from "../ui/BackButton";

function ViewPDF() {
  //"/clients/:clientURL/view/:quoteID"
  const { clientURL } = useParams();
  const navigate = useNavigate();
  return (
    // <MainFlexContainer back={`/clients/${clientURL}`}>
    <div>
      <div className="pb-8">
        <BackButton onClick={() => navigate(`/clients/${clientURL}`)} />
      </div>
      <PDFRender />
    </div>
    // </MainFlexContainer>
  );
}

export default ViewPDF;
