import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/app.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
  },
  {
    path: "/signIn",
    element: <SignInPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
