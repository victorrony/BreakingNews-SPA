import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import GlobalStyled from "./GlobalStyled.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Authentication } from "./pages/Authentication/Authentcation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/title",
        element: <Search />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authentication />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
