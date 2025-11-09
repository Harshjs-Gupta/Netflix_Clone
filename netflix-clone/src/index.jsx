import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/validation/SignUpPage";
import SignInPage from "./pages/validation/SignInPage";
import HomePage from "./pages/HomePage";
import MoviePlayer from "./components/MoviePlayer/MoviePlayer";

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
  {
    path: "/movie-player/:id",
    element: <MoviePlayer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
