import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AllToys from "../components/pages/AllToys";
import Home from "../components/pages/Home";
import Authentication from "../components/auth/Authentication";
import AddToy from "../components/pages/AddToy";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../components/shared/ErrorPage";
import ToyDetails from "../components/pages/ToyDetails";
import MyToys from "../components/pages/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "addtoy",
        element: (
          <PrivateRouter>
            <AddToy />
          </PrivateRouter>
        ),
      },
      {
        path: "toydetails/:id",
        element: (
          <PrivateRouter>
            <ToyDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "mytoys",
        element: (
          <PrivateRouter>
            <MyToys />
          </PrivateRouter>
        ),
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
    ],
  },
]);

export default router;
