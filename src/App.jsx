import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './ui/AppLayout';
import './index.css'

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
