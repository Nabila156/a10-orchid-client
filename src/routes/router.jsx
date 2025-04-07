import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../ErrorPage";
import AddMovieLayout from "../layouts/AddMovieLayout";
import Register from "../register/Register";
import Login from "../login/login";
import ForgotPassword from "../login/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import AllMovies from "../movies/AllMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch('http://localhost:5000/featured')
  },
  {
    path: "/allMovies",
    element: <AllMovies></AllMovies>,
    loader: () => fetch('http://localhost:5000/movies')
  },
  {
    path: "/addMovie",
    element:
      <PrivateRoute>
        <AddMovieLayout></AddMovieLayout>
      </PrivateRoute>
    ,
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