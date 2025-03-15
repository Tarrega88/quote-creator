import { Link } from "react-router-dom";

function Nav() {
  {
    /*TODO 3/13/2025:
    put new, edit, and view quote into their own page just called quote, and navigate from there
    */
  }
  const links = [
    // { name: "New Quote", link: "create" },
    // { name: "Edit Quote", link: "edit" },
    // { name: "View Quote", link: "currentQuote" },
    { name: "Quotes", link: "quotes" },
    { name: "Expenses", link: "expenses" },
    { name: "Services", link: "services" },
    { name: "Clients", link: "clients" },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 pt-12 pl-12 text-2xl md:text-3xl">
        {links.map((e, i) => (
          <Link
            to={e.link}
            key={i}
            className="w-fit transition-all duration-200 hover:text-slate-400"
          >
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
