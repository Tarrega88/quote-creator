import InstructionText from "../../../ui/InstructionText";
import MainFlexContainer from "../../../ui/MainFlexContainer";

function ExistingCategory() {
  return (
    <MainFlexContainer back="/services/add/category">
      <InstructionText text="Which category will the service belong to?" />
    </MainFlexContainer>
  );
}

export default ExistingCategory;

{
  /*
      const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const services = useSelector((state) => state.service.services)
  //     .map((e) => e.serviceName)
  //     .sort();

  const categories = useSelector((state) => state.service.categories);
  const sorted = [...categories].sort();

  const options = ["", "Create New Category", ...sorted];

  function handleConfirmCategory() {
    if (!category) return;
    if (category === "Create New Category") {
      navigate("/services/add_category");
    } else {
      dispatch(setServiceCategory(category));
      navigate("/services/add");
      //go to the page that asks how this service is charged (time, measurement, flat rate)
    }
  }

  return (
    <MainFlexContainer back="/services">
      <InstructionText text="Select a category or create a new one" />
      <Dropdown
        options={options}
        onChange={(e) => setCategory(e.target.value)}
      />
      <AcceptButton
        text="Next"
        isActive={category.length > 0}
        onClick={handleConfirmCategory}
      />
    </MainFlexContainer>
  );
    */
}
