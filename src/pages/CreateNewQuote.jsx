import { useDispatch, useSelector } from "react-redux";
import AcceptButton from "../ui/AcceptButton";
import InstructionText from "../ui/InstructionText";
import TextInput from "../ui/TextInput";
import { createQuote } from "../quoteSlice";
import { updateCustomer } from "../customersSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SquareButton from "../ui/SquareButton";
import BackButton from "../ui/BackButton";
import Dropdown from "../ui/Dropdown";

function CreateNewQuote() {
  const [isNewCustomer, setIsNewCustomer] = useState(null);
  const [customer, setCustomer] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const allCustomers = useSelector(state => state.customer)
  const customerData = useSelector((state) =>
    state.customer.customers,
  );

  const customerNames = Object.keys(customerData);

  function backButtonClicked() {
    if (isNewCustomer === null) {
      navigate("/");
    } else {
      setIsNewCustomer(null);
    }
  }

  const isCurrentCustomer = useSelector((state) =>
    Object.hasOwn(state.customer.customers, customer),
  );

  function submitCustomer() {
    if (!customer.length) return;
    dispatch(createQuote(customer));
    // console.log(isCurrentCustomer);
    dispatch(updateCustomer(customer));
    navigate("/edit");
  }

  // const allCustomers = useSelector((state) => state.customer);
  // console.log(allCustomers);

  // console.log(customerData);

  {
    return isNewCustomer === null ? (
      <div>
        <BackButton text="Back" onClick={backButtonClicked} />
        <div className="flex justify-center pt-8">
          <div className="flex flex-col gap-4">
            <InstructionText text="Is this for a new or existing customer?" />
            <div className="flex justify-evenly">
              <SquareButton text="New" onClick={() => setIsNewCustomer(true)} />
              <SquareButton
                text="Existing"
                onClick={() => setIsNewCustomer(false)}
              />
            </div>
          </div>
        </div>
      </div>
    ) : isNewCustomer === false ? (
      <div>
        <BackButton text="Back" onClick={backButtonClicked} />
        <div className="flex justify-center">
          <div className="flex flex-col gap-4">
            <InstructionText text="Which customer?" />
            <Dropdown options={["", ...customerNames]} onChange={(e) => setCustomer(e.target.value)}/>
            <div className="self-center pt-4">
              <AcceptButton onClick={submitCustomer}/>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <BackButton text="Back" onClick={backButtonClicked} />

        <div className="flex justify-center pt-12">
          <div className="flex flex-col gap-4">
            <InstructionText text="What is the customer's name?" />
            <TextInput
              onChange={(e) => setCustomer(e.target.value)}
              onEnter={submitCustomer}
            />
            <div className="self-center pt-8">
              <AcceptButton onClick={submitCustomer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewQuote;
