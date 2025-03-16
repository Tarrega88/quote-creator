import { useSelector } from "react-redux";
import Nav from "../../ui/Nav";

function Home() {
  const services = useSelector((state) => state.service);
  console.log("---Services---");
  console.log(services);
  const expenses = useSelector((state) => state.expense.expenses);
  console.log("---expenses---");
  console.log(expenses);

  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;
