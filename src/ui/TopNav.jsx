import { Link } from "react-router-dom";
import { navLinks } from "../helpers/navLinkText";

function TopNav() {
  // const links = [
  //   { name: "Quotes", link: "quotes" },
  //   { name: "Expenses", link: "expenses" },
  //   { name: "Services", link: "services" },
  //   { name: "Clients", link: "clients" },
  // ];
  return (
    // <div>
    <div className="text-md flex justify-end gap-4 bg-slate-600 px-4 pt-4 pb-4 sm:gap-8 sm:text-lg md:text-xl">
      <Link
        className="mr-auto text-slate-50 transition-all duration-200 hover:text-slate-300"
        to="/"
      >
        Home
      </Link>
      {navLinks.map((e, i) => (
        <Link
          to={e.link}
          key={i}
          className="block cursor-pointer text-slate-50 transition-all duration-200 hover:text-slate-300"
        >
          {e.name}
        </Link>
      ))}
    </div>
    // </div>
  );
}

export default TopNav;
