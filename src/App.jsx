import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import "./index.css";
import CreateNewQuote from "./pages/CreateNewQuote";
import EditQuote from "./pages/EditQuote";
import CurrentQuote from "./pages/CurrentQuote";
import Clients from "./pages/Clients";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
