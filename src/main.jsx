import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import BookDetails from "./components/BookDetails/BookDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
