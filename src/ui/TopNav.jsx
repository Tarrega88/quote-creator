import { Link } from "react-router-dom";
import BackButton from "./BackButton";

function TopNav() {
  const links = [
    { name: "New Quote", link: "create" },
    { name: "Edit Quote", link: "edit" },
    { name: "View Quote", link: "currentQuote" },
    { name: "All Quotes", link: "allQuotes" },
  ];
  return (
    <div>
      <div className="sm:text-md flex justify-end gap-4 bg-slate-600 px-4 pt-4 pb-2 text-sm">
        <Link
          className="mr-auto text-slate-50 transition-all duration-200 hover:text-slate-300"
          to="/"
        >
          Home
        </Link>
        {links.map((e, i) => (
          <Link
            to={e.link}
            key={i}
            className="block cursor-pointer text-slate-50 transition-all duration-200 hover:text-slate-300"
          >
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
