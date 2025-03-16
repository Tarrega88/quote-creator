import { useDispatch, useSelector } from "react-redux";
import AcceptButton from "../../../ui/AcceptButton";
import Dropdown from "../../../ui/Dropdown";
import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { useState } from "react";
import {
  addPreliminaryData,
  setServiceCategory,
} from "../../../store/slices/serviceSlice";
import { useNavigate } from "react-router-dom";

/*
[serviceCategory]: { [serviceName]: {
        serviceExpenses: {
            materials: {},
            rentals: {},
            labor: {},
        },
        serviceCharge: {},
    }
}
*/

function ExistingCategory() {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const serviceData = useSelector((state) => state.service);
  const options = Object.keys(serviceData.services);

  const serviceName = serviceData.current.serviceName;

  function handleClick() {
    if (!category.length) return;
    dispatch(setServiceCategory(category));
    // dispatch(addServiceCategory());
    dispatch(
      addPreliminaryData({
        category,
        data: {
          [serviceName]: {
            serviceExpenses: {
              materials: {},
              rentals: {},
              labor: {},
            },
            serviceCharges: {},
          },
        },
      }),
    );
    navigate("/services/add/bridge");
    // navigate("/services/add/price_model");
  }

  return (
    <MainFlexContainer back="/services/add/category">
      <InstructionText text="Which category will the service belong to?" />
      <Dropdown
        options={["", ...options]}
        onChange={(e) => setCategory(e.target.value)}
      />
      <AcceptButton
        text="Next"
        isActive={category.length > 0}
        onClick={handleClick}
      />
    </MainFlexContainer>
  );
}

export default ExistingCategory;
