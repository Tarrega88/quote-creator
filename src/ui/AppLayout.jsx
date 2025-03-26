import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

function AppLayout() {
  return (
    <div className="flex h-dvh w-dvw flex-col bg-gradient-to-tl from-slate-800 to-slate-900 text-slate-50">
      <TopNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
