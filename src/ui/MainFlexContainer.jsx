import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

function MainFlexContainer({ children, back }) {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton onClick={() => navigate(back)} />
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-6 pt-8">{children}</div>
      </div>
    </div>
  );
}

export default MainFlexContainer;
