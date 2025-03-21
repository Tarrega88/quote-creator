import { useSelector } from "react-redux";
import Nav from "../../ui/Nav";

function Home() {
  const services = useSelector((state) => state.service);
  console.log("---Services---");
  console.log(services);
  const expenses = useSelector((state) => state.expense.expenses);
  console.log("---expenses---");
  console.log(expenses);
  const clients = useSelector((state) => state.client.clients);
  console.log("===clients===");
  console.log(clients);

  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;
