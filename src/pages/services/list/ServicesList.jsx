import { useDispatch, useSelector } from "react-redux";
import ServiceListRow from "./ServiceListRow";
import ServiceTitleRow from "./ServiceTitleRow";
import { deleteExpense } from "../../../store/slices/expenseSlice";
import MainFlexContainer from "../../../ui/MainFlexContainer";
import { deleteService } from "../../../store/slices/serviceSlice";

function ServicesList() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.service.services);

  function handleDelete(serviceCategory, serviceName) {
    dispatch(deleteService({ serviceCategory, serviceName }));
  }

  const serviceEntries = Object.entries(services).flatMap(([category, items]) =>
    Object.values(items),
  );

  return (
    <MainFlexContainer back="/services">
      <div className="w-dvw">
        <ServiceTitleRow />
        {serviceEntries.map((service, i) => (
          <ServiceListRow
            data={service}
            key={i}
            odd={i % 2}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </MainFlexContainer>
  );
}

export default ServicesList;
