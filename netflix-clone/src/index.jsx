import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/validation/SignUpPage";
import SignInPage from "./pages/validation/SignInPage";
import HomePage from "./pages/HomePage";

function handleLogOut() {
  localStorage.clear();
}

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
    element: <HomePage handleLogOut={handleLogOut} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
