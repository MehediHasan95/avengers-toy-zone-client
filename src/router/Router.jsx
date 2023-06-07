import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AllToys from "../components/pages/AllToys";
import Home from "../components/pages/Home";
import Authentication from "../components/auth/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "alltoys",
        element: <AllToys />,
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
    ],
  },
]);

export default router;
