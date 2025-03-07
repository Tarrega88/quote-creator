import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-slate-800 h-dvh w-dvw text-slate-50">
      <Outlet />
    </div>
  );
}

export default AppLayout;