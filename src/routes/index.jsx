import { createBrowserRouter } from "react-router";

import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Books from "../pages/Books";
import BookDetail from "../pages/BookDetail"
import Favorites from "../pages/Favorites";
import Help from "../pages/Help";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:id",
        element: <BookDetail />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
]);

export default myRouter;
