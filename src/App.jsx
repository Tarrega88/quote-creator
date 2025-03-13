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
import ExpensesList from "./pages/expenses/list/ExpensesList";
import Materials from "./pages/expenses/materials/Materials";
import Labor from "./pages/expenses/labor/Labor";
import Rentals from "./pages/expenses/Rentals";
import Measurements from "./pages/expenses/materials/Measurements";
import ExistingClient from "./pages/create/ExistingClient";
import NewClient from "./pages/create/NewClient";
import Length from "./pages/expenses/materials/length/Length";
import Area from "./pages/expenses/materials/area/Area";
import Volume from "./pages/expenses/materials/volume/Volume";
import Weight from "./pages/expenses/materials/weight/Weight";
// import Quantity from "./pages/expenses/materials/quantity/Quantity";
import MeasurementCost from "./pages/expenses/materials/MeasurementCost";
import QuantityCost from "./pages/expenses/materials/quantity/QuantityCost";
import DoneOrAdd from "./pages/expenses/DoneOrAdd";
import MaterialsList from "./pages/expenses/list/materialList/MaterialsList";
import LaborList from "./pages/expenses/list/laborList/LaborList";
import LaborTime from "./pages/expenses/labor/LaborTime";
import LaborCost from "./pages/expenses/labor/LaborCost";
import RentalsList from "./pages/expenses/list/rentalList/RentalsList";

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
        path: "/create/existing_client",
        element: <ExistingClient />,
      },
      {
        path: "/create/new_client",
        element: <NewClient />,
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
        path: "/expenses/add/materials/measurements",
        element: <Measurements />,
      },
      {
        path: "/expenses/add/materials/measurements/length",
        element: <Length />,
      },
      {
        path: "/expenses/add/materials/measurements/length/:measurementUnit",
        element: <MeasurementCost />,
      },
      {
        path: "/expenses/add/materials/measurements/area",
        element: <Area />,
      },
      {
        path: "/expenses/add/materials/measurements/area/:measurementUnit",
        element: <MeasurementCost />,
      },
      {
        path: "/expenses/add/materials/measurements/volume",
        element: <Volume />,
      },
      {
        path: "/expenses/add/materials/measurements/volume/:measurementUnit",
        element: <MeasurementCost />,
      },
      {
        path: "/expenses/add/materials/measurements/weight",
        element: <Weight />,
      },
      {
        path: "/expenses/add/materials/measurements/weight/:measurementUnit",
        element: <MeasurementCost />,
      },
      // {
      //   path: "/expenses/add/materials/measurements/quantity",
      //   element: <Quantity />,
      // },
      {
        path: "/expenses/added",
        element: <DoneOrAdd />,
      },
      {
        path: "/expenses/add/materials/measurements/quantity/:measurementUnit",
        element: <QuantityCost />,
      },
      {
        path: "/expenses/add/labor",
        element: <Labor />,
      },
      {
        path: "/expenses/add/labor/time",
        element: <LaborTime />,
      },
      {
        path: "/expenses/add/labor/time/:paidByThe",
        element: <LaborCost />,
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
        path: "/expenses/list/materials",
        element: <MaterialsList />,
      },
      {
        path: "/expenses/list/rentals",
        element: <RentalsList />,
      },
      {
        path: "/expenses/list/labor",
        element: <LaborList />,
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
