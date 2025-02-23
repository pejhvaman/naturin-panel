import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      app layout
      <Outlet />
    </div>
  );
}

export default AppLayout;
