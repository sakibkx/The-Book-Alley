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
import PagesToRead from "./components/PagesToRead/PagesToRead";
import Author from "./components/Author/Author";
import Genre from "./components/Genre/Genre";
import BookDetails from "./components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>
      }, 
      {
        path: "/author",
        element: <Author></Author>
      },
      {
        path: "/genre",
        element: <Genre></Genre>
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
