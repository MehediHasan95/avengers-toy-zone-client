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
import Blog from "../components/pages/Blog";
import About from "../components/pages/About";

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
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-mehedi-hasan95.vercel.app/toy/${params.id}`
          ),
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
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
    ],
  },
]);

export default router;
