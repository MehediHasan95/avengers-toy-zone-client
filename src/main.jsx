import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "react-tabs/style/react-tabs.css";
import "@smastrom/react-rating/style.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import DataProvider from "./provider/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
