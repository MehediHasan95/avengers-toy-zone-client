import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}

export default App;
