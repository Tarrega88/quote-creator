import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import AppLayout from "./ui/AppLayout";
import "./index.css";
import CreateNewQuote from "./pages/create/CreateNewQuote";
import EditQuote from "./pages/edit/EditQuote";
import CurrentQuote from "./pages/view/CurrentQuote";
import Clients from "./pages/clients/Clients";
import ClientData from "./pages/clients/ClientData";
import JobAdded from "./jobs/JobAdded";
import Expenses from "./pages/expenses/Expenses";
import AddExpense from "./pages/expenses/AddExpense";
import ExpensesList from "./pages/expenses/ExpensesList";
import Materials from "./pages/expenses/materials/Materials";
import Labor from "./pages/expenses/Labor";
import Rentals from "./pages/expenses/Rentals";

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
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/expenses/add",
        element: <AddExpense />,
      },
      {
        path: "/expenses/add/materials",
        element: <Materials />,
      },
      {
        path: "/expenses/add/labor",
        element: <Labor />,
      },
      {
        path: "/expenses/add/rentals",
        element: <Rentals />,
      },
      {
        path: "/expenses/list",
        element: <ExpensesList />,
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
      { path: "/added", element: <JobAdded /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
