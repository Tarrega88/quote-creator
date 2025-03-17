import HybridList from "../pages/clientsAndQuotes/HybridList";
import CreateNewQuote from "../pages/create/CreateNewQuote";
import ExistingClient from "../pages/create/ExistingClient";
import NewClient from "../pages/create/NewClient";
import QuoteNav from "../pages/quote/QuoteNav";
import CurrentQuote from "../pages/view/CurrentQuote";

export const quoteRoutes = [
  // {
  //   path: "/quotes",
  //   element: <QuoteNav />,
  // },
  { path: "/quotes", element: <HybridList /> },
  {
    path: "/quotes/create",
    element: <CreateNewQuote />,
  },
  // {
  //   path: "/quotes/edit",
  //   element: <EditQuote />,
  // },
  {
    path: "/quotes/view",
    element: <CurrentQuote />,
  },
  {
    path: "/quotes/create/existing_client",
    element: <ExistingClient />,
  },
  {
    path: "/quotes/create/new_client",
    element: <NewClient />,
  },
];
