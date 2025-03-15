import { useNavigate, useParams } from "react-router-dom";
import { unitsOfMeasurement } from "../../../../helpers/measurementTextToLink";
import SquareButtonRow from "../../../../ui/SquareButtonRow";
import SquareButton from "../../../../ui/SquareButton";

function MeasurementUnit() {
  const navigate = useNavigate();

  const { measurementUnit } = useParams();
  const { measurementType } = useParams();

  const data = unitsOfMeasurement[measurementType];
  const keys = Object.keys(data);

  console.log(measurementUnit);

  return (
    <div>
      <SquareButtonRow>
        {keys.map((e, i) => (
          <SquareButton
            key={i}
            text={e}
            onClick={() =>
              navigate(
                `/services/add/price_model/measurement/${measurementType}/${data[e]}`,
              )
            }
          />
        ))}
      </SquareButtonRow>
    </div>
  );
}

export default MeasurementUnit;
