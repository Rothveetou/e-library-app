import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import UploadBook from "../components/dashboard/UploadBook";
import ManageBooks from "../components/dashboard/ManageBooks";
import EditBooks from "../components/dashboard/EditBooks";
import BookStorage from "../components/dashboard/BookStorage";
import Register from "../components/dashboard/auth/Register";
import Login from "../components/dashboard/auth/Login";

import User from "../components/dashboard/auth/User";
import BookDetail from "../components/Book/BookDetail";

const pathRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/book/:id",
        element: <BookDetail />,
        // loader
        loader: ({ params }) =>
          fetch(`http://localhost:4000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/admin/dashboard/upload-books", element: <UploadBook /> },
      { path: "/admin/dashboard/manage-books", element: <ManageBooks /> },
      {
        path: "/admin/dashboard/update-books/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/book/${params.id}`).then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch book data");
            }
            return res.json();
          }),
      },
      { path: "/admin/dashboard/all-books", element: <BookStorage /> },
      { path: "/admin/dashboard/users", element: <User /> },
    ],
  },
  { path: "/sign-up", element: <Register /> },
  { path: "/log-in", element: <Login /> },
]);

export default pathRoute;
