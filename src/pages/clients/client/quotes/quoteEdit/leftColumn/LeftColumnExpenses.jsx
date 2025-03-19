import ExpenseList from "./ExpenseList";

function LeftColumnExpenses({ data }) {
  console.log("DATA");
  console.log(data);

  const { labor, materials, rentals } = data;

  const laborKeys = Object.keys(labor);
  const materialKeys = Object.keys(materials);
  const rentalKeys = Object.keys(rentals);

  return (
    <div className="">
      <ExpenseList title="Materials" data={materials} />
      {/* {materialKeys.map((e, i) => (
        <div key={i}>{e}</div>
      ))} */}
      {/* <div>Labor</div>
      <div>Rentals</div> */}
    </div>
  );
}

export default LeftColumnExpenses;
