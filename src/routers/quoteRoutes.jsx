import HybridList from "../pages/clients/HybridList";
import CurrentQuote from "../pages/view/CurrentQuote";

export const quoteRoutes = [
  { path: "/quotes", element: <HybridList /> },
  {
    path: "/quotes/view",
    element: <CurrentQuote />,
  },
];
