import { useSelector } from "react-redux";
import Nav from "../../ui/Nav";
import { Link } from "react-router-dom";

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
      <div className="flex justify-between">
        <Nav />
        <div className="flex flex-col gap-4 pt-12 pr-12 text-xl md:text-2xl">
          <Link
            to="/myInfo"
            className="w-fit transition-all duration-200 hover:text-slate-400"
          >
            My Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
