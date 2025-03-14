import AddService from "../pages/services/AddService";
import AddCategory from "../pages/services/category/AddCategory";
import ChooseNewOrExistingCategory from "../pages/services/category/ChooseNewOrExistingCategory";
import ExistingCategory from "../pages/services/category/ExistingCategory";
import ServiceCategory from "../pages/services/category/ServiceCategory";
import ServicesList from "../pages/services/list/ServicesList";
import FlatModel from "../pages/services/priceModel/FlatModel";
import MeasurementModel from "../pages/services/priceModel/measurement/MeasurementModel";
import MeasurementType from "../pages/services/priceModel/measurement/MeasurementType";
import MeasurementUnit from "../pages/services/priceModel/measurement/MeasurementUnit";
import PriceModel from "../pages/services/priceModel/PriceModel";
import TimeModel from "../pages/services/priceModel/TimeModel";
import ServiceExpenseBridge from "../pages/services/bridge/ServiceExpenseBridge";
import Services from "../pages/services/Services";
import ExpensesToAdd from "../pages/services/bridge/ExpensesToAdd";
import ChooseExpense from "../pages/services/bridge/ChooseExpense";

export const serviceRoutes = [
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
    path: "/services/add/bridge",
    element: <ServiceExpenseBridge />,
  },
  {
    path: "/services/add/bridge/expenses",
    element: <ExpensesToAdd />,
  },
  {
    path: "/services/add/bridge/expenses/:expenseType",
    element: <ChooseExpense />,
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
    path: "/services/add/price_model/measurement/:measurementType",
    element: <MeasurementType />,
  },
  {
    path: "/services/add/price_model/measurement/:measurementType/:measurementUnit",
    element: <div>Test</div>,
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
];
