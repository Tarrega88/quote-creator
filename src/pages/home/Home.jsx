import { useSelector } from "react-redux";
import Nav from "../../ui/Nav";

function Home() {
  const test = useSelector((state) => state.expense);
  console.log("---expense slice---");
  console.log(test);
  const test2 = useSelector((state) => state.service);
  console.log("---service slice---");
  console.log(test2);
  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;
