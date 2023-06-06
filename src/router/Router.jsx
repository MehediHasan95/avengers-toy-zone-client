import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AllToys from "../components/pages/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "alltoys",
        element: <AllToys />,
      },
    ],
  },
]);

export default router;
