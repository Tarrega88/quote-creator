import Client from "../pages/clients/client/Client";
import QuoteEditView from "../pages/clients/client/quotes/quoteEdit/QuoteEditView";
import HybridList from "../pages/clients/HybridList";

export const clientRoutes = [
  { path: "/clients", element: <HybridList /> },
  { path: "/clients/:clientURL", element: <Client /> },
  { path: "/clients/:clientURL/:quoteID", element: <QuoteEditView /> },
];
