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
import Rentals from "./pages/expenses/rentals/Rentals";
import RentalTime from "./pages/expenses/rentals/RentalTime";
import RentalCost from "./pages/expenses/rentals/RentalCost";
import QuoteNav from "./pages/quote/QuoteNav";
import AddService from "./pages/services/AddService";
import ServicesList from "./pages/services/list/ServicesList";
import Services from "./pages/services/Services";
import ServiceCategory from "./pages/services/category/ServiceCategory";
import AddCategory from "./pages/services/category/AddCategory";
import ChooseNewOrExistingCategory from "./pages/services/category/ChooseNewOrExistingCategory";
import ExistingCategory from "./pages/services/category/ExistingCategory";
import PriceModel from "./pages/services/priceModel/PriceModel";
import MeasurementModel from "./pages/services/priceModel/MeasurementModel";
import TimeModel from "./pages/services/priceModel/TimeModel";
import FlatModel from "./pages/services/priceModel/FlatModel";

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
        path: "/quotes",
        element: <QuoteNav />,
      },
      {
        path: "/quotes/create",
        element: <CreateNewQuote />,
      },
      {
        path: "/quotes/edit",
        element: <EditQuote />,
      },
      {
        path: "/quotes/view",
        element: <CurrentQuote />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/choose_category",
        element: <ServiceCategory />,
      },
      {
        path: "/services/add/category",
        element: <ChooseNewOrExistingCategory />,
      },
      { path: "/services/add/category/new", element: <AddCategory /> },
      {
        path: "/services/add/category/existing",
        element: <ExistingCategory />,
      },
      {
        path: "/services/add",
        element: <AddService />,
      },
      {
        path: "/services/add/price_model",
        element: <PriceModel />,
      },
      {
        path: "/services/add/price_model/measurement",
        element: <MeasurementModel />,
      },
      {
        path: "/services/add/price_model/time",
        element: <TimeModel />,
      },
      {
        path: "/services/add/price_model/flat",
        element: <FlatModel />,
      },
      {
        path: "/services/list",
        element: <ServicesList />,
      },
      {
        path: "/quotes/create/existing_client",
        element: <ExistingClient />,
      },
      {
        path: "/quotes/create/new_client",
        element: <NewClient />,
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
        path: "/expenses/add/rentals/time",
        element: <RentalTime />,
      },
      {
        path: "/expenses/add/rentals/time/:paidByThe",
        element: <RentalCost />,
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
