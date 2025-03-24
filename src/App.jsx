import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./ui/AppLayout";
import "./index.css";
import { serviceRoutes } from "./routers/serviceRoutes";
import { expenseRoutes } from "./routers/expensesRoutes";
import { quoteRoutes } from "./routers/quoteRoutes";
import { clientRoutes } from "./routers/clientRoutes";
import MyInfo from "./pages/home/MyInfo";
import AppInfo from "./pages/home/AppInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...clientRoutes,
      ...quoteRoutes,
      ...serviceRoutes,
      ...expenseRoutes,
      { path: "/myInfo", element: <MyInfo /> },
      { path: "/appInfo", element: <AppInfo /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
