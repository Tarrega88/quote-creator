import { Link } from "react-router-dom";

function Nav() {
  const links = [
    { name: "Create New Quote", link: "create" },
    { name: "Edit Current Quote", link: "edit" },
    { name: "View Current Quote", link: "currentQuote" },
    { name: "All Quotes", link: "allQuotes" },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 pt-12 pl-12 text-2xl md:text-3xl">
        {links.map((e, i) => (
          <Link
            to={e.link}
            key={i}
            className="transition-all duration-200 hover:text-slate-400"
          >
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
