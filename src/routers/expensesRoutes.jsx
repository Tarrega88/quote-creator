import AddExpense from "../pages/expenses/AddExpense";
import DoneOrAdd from "../pages/expenses/DoneOrAdd";
import Expenses from "../pages/expenses/Expenses";
import Labor from "../pages/expenses/labor/Labor";
import LaborCost from "../pages/expenses/labor/LaborCost";
import LaborTime from "../pages/expenses/labor/LaborTime";
import ExpensesList from "../pages/expenses/list/ExpensesList";
import LaborList from "../pages/expenses/list/laborList/LaborList";
import MaterialsList from "../pages/expenses/list/materialList/MaterialsList";
import RentalsList from "../pages/expenses/list/rentalList/RentalsList";
import Materials from "../pages/expenses/materials/Materials";
import MeasurementCost from "../pages/expenses/materials/MeasurementCost";
import Measurements from "../pages/expenses/materials/Measurements";
import TypeOfMeasurement from "../pages/expenses/materials/TypeOfMeasurement";
import RentalCost from "../pages/expenses/rentals/RentalCost";
import Rentals from "../pages/expenses/rentals/Rentals";
import RentalTime from "../pages/expenses/rentals/RentalTime";

export const expenseRoutes = [
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
    path: "/expenses/add/materials/measurements/:measurementType",
    element: <TypeOfMeasurement />,
  },
  {
    path: "/expenses/add/materials/measurements/:measurementType/:measurementUnit",
    element: <MeasurementCost />,
  },
  {
    path: "/expenses/added",
    element: <DoneOrAdd />,
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
];
