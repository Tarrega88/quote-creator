import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./ui/AppLayout";
import "./index.css";
import CreateNewQuote from "./pages/create/CreateNewQuote";
import EditQuote from "./pages/edit/EditQuote";
import CurrentQuote from "./pages/view/CurrentQuote";
import Clients from "./pages/clients/Clients";
import ClientData from "./pages/clients/ClientData";

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
      {
        path: "/create",
        element: <CreateNewQuote />,
      },
      {
        path: "/edit",
        element: <EditQuote />,
      },
      {
        path: "/currentQuote",
        element: <CurrentQuote />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/clients/:clientUrl",
        element: <ClientData />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
