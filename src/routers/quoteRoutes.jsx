import HybridList from "../pages/clientsAndQuotes/HybridList";
import CurrentQuote from "../pages/view/CurrentQuote";

export const quoteRoutes = [
  // {
  //   path: "/quotes",
  //   element: <QuoteNav />,
  // },
  { path: "/quotes", element: <HybridList /> },
  // {
  //   path: "/quotes/edit",
  //   element: <EditQuote />,
  // },
  {
    path: "/quotes/view",
    element: <CurrentQuote />,
  },
];
