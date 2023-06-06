import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AllToys from "../components/pages/AllToys";
import Home from "../components/pages/Home";

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
    ],
  },
]);

export default router;
