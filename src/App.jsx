import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./ui/AppLayout";
import "./index.css";
import Clients from "./pages/clients/Clients";
import ClientData from "./pages/clients/ClientData";
import JobAdded from "./jobs/JobAdded";
// import Quantity from "./pages/expenses/materials/quantity/Quantity";
import { serviceRoutes } from "./routers/serviceRoutes";
import { expenseRoutes } from "./routers/expensesRoutes";
import { quoteRoutes } from "./routers/quoteRoutes";

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
      ...quoteRoutes,
      ...serviceRoutes,
      ...expenseRoutes,
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/clients/:clientUrl",
        element: <ClientData />,
      },
      { path: "/added", element: <JobAdded /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
