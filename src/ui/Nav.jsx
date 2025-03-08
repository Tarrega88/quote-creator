import { Link } from "react-router-dom";
import InstructionText from "./InstructionText";

function Nav() {
  const links = [
    { name: "Create New Quote", link: "create" },
    { name: "Edit Current Quote", link: "edit" },
    { name: "View Current Quote", link: "currentQuote" },
    { name: "All Quotes", link: "allQuotes" },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 text-2xl pl-12 pt-12 md:text-3xl">
        {links.map((e, i) => (
          <Link
            to={e.link}
            key={i}
            className="hover:text-slate-400 transition-all duration-200"
          >
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
