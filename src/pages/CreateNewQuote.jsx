import { useDispatch, useSelector } from "react-redux";
import AcceptButton from "../ui/AcceptButton";
import InstructionText from "../ui/InstructionText";
import TextInput from "../ui/TextInput";
import { createQuote } from "../quoteSlice";
import { updateCustomer } from "../customersSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewQuote() {
  const [customer, setCustomer] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCurrentCustomer = useSelector((state) =>
    Object.hasOwn(state.customer.customers, customer)
  );

  function submitCustomer() {
    if (!customer.length) return;
    dispatch(createQuote(customer));
    console.log(isCurrentCustomer);
    dispatch(updateCustomer(customer));
    navigate("/editQuote");
  }

  const allCustomers = useSelector((state) => state.customer);
  console.log(allCustomers);

  return (
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
  );
}

export default CreateNewQuote;
