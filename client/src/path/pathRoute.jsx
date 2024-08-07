import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Blog from "../pages/Blog";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
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
]);

export default pathRoute;
