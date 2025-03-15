import { useNavigate, useParams } from "react-router-dom";
import { unitsOfMeasurement } from "../../../../helpers/measurementTextToLink";
import SquareButtonRow from "../../../../ui/SquareButtonRow";
import SquareButton from "../../../../ui/SquareButton";

function MeasurementUnit() {
  //TODO 3/14/2025: MeasurementType and MeasurementUnit, and maybe MeasurementModel have
  //messed up naming conventions.
  //Measurement Model should be Measurement Type,
  // Measurement Type should be Measurement Unit,
  //and Measurement Unit should be the final question on price per measurement
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
