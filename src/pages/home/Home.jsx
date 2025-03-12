import { useSelector } from "react-redux";
import Nav from "../../ui/Nav";

function Home() {
  const test = useSelector((state) => state.expense);
  console.log(test);
  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;
