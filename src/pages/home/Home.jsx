import { useSelector } from "react-redux";
import Nav from "../../ui/Nav";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

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
            className="flex w-fit items-center gap-2 transition-all duration-200 hover:text-slate-400"
          >
            <IoPersonSharp />
            <div>User Info</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
