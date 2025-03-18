import Client from "../pages/clients/client/Client";
import HybridList from "../pages/clients/HybridList";

export const clientRoutes = [
  { path: "/clients", element: <HybridList /> },
  { path: "/clients/:clientURL", element: <Client /> },
];
