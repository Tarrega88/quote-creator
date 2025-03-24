import { Link } from "react-router-dom";
import { navLinks } from "../helpers/navLinkText";
import { IoPeopleSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { GiWoodBeam } from "react-icons/gi";

const displayOptions = {
  clients: <IoPeopleSharp />,
  services: <FaTools />,
  expenses: <GiWoodBeam />,
};

function Nav() {
  return (
    <div>
      <div className="flex flex-col gap-4 pt-12 pl-12 text-2xl md:text-3xl">
        {navLinks.map((e, i) => (
          <Link
            to={e.link}
            key={i}
            className="flex w-fit items-center gap-6 transition-all duration-200 hover:text-slate-400"
          >
            <div>{displayOptions[e.link]}</div>
            <div>{e.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
