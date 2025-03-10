import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="bg-slate-800 h-dvh w-dvw text-slate-50">
      <TopNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
