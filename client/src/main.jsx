import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import pathRoute from "./path/pathRoute.jsx";
import AuthProvider from "./components/Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={pathRoute} />
      {/* <App /> */}
    </AuthProvider>
  </React.StrictMode>
);
