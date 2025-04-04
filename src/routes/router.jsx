import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../ErrorPage";
import AddMovieLayout from "../layouts/AddMovieLayout";
import Register from "../register/Register";
import Login from "../login/login";
import ForgotPassword from "../login/ForgotPassword";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/addMovie",
      element: <AddMovieLayout></AddMovieLayout>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword></ForgotPassword>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }

  ]);

  export default router;