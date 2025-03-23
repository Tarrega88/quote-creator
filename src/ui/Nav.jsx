import { Link } from "react-router-dom";
import { navLinks } from "../helpers/navLinkText";

function Nav() {
  return (
    <div>
      <div className="flex flex-col gap-4 pt-12 pl-12 text-2xl md:text-3xl">
        {navLinks.map((e, i) => (
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
