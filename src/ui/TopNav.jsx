import { Link } from "react-router-dom";

function TopNav() {
  const links = [
    // { name: "New", link: "create" },
    // { name: "Edit", link: "edit" },
    // { name: "View", link: "currentQuote" },
    { name: "Quotes", link: "quotes" },
    { name: "Services", link: "services" },
    { name: "Expenses", link: "expenses" },
    { name: "Clients", link: "clients" },
  ];
  return (
    // <div>
    <div className="text-md flex justify-end gap-4 bg-slate-600 px-4 pt-4 pb-4 sm:gap-8 sm:text-lg md:text-xl">
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
    // </div>
  );
}

export default TopNav;
