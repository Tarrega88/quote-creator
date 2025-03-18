import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./ui/AppLayout";
import "./index.css";
import { serviceRoutes } from "./routers/serviceRoutes";
import { expenseRoutes } from "./routers/expensesRoutes";
import { quoteRoutes } from "./routers/quoteRoutes";
import { clientRoutes } from "./routers/clientRoutes";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
