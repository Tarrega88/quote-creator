import { Link } from "react-router-dom";
import { navLinks } from "../helpers/navLinkText";

import { IoPeopleSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { GiWoodBeam } from "react-icons/gi";
import { MdHome } from "react-icons/md";

const displayOptions = {
  clients: <IoPeopleSharp />,
  services: <FaTools />,
  expenses: <GiWoodBeam />,
};
//bg-gradient-to-tl from-slate-800 to-slate-900 text-slate-50
function TopNav() {
  return (
    <div className="text-md flex justify-end gap-4 bg-gradient-to-br from-slate-700 to-slate-600 px-4 pt-4 pb-4 text-slate-50 sm:gap-8 sm:text-lg md:text-xl">
      <Link
        className="mr-auto flex items-center gap-2 text-slate-50 transition-all duration-200 hover:text-slate-300"
        to="/"
      >
        <MdHome className="text-xl" />
        <div>Home</div>
      </Link>
      {navLinks.map((e, i) => (
        <Link
          to={e.link}
          key={i}
          className="flex cursor-pointer items-center gap-2 text-slate-50 transition-all duration-200 hover:text-slate-300"
        >
          <div>{displayOptions[e.link]}</div>
          <div>{e.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default TopNav;
