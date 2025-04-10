import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../ErrorPage";
import AddMovieLayout from "../layouts/AddMovieLayout";
import Login from "../login/login";
import ForgotPassword from "../login/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import MovieDetailsLayout from "../layouts/MovieDetailsLayout";
import AllMoviesLayout from "../layouts/AllMoviesLayout";
import RegisterLayout from "../layouts/RegisterLayout";
import LoginLayout from "../layouts/LoginLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch('http://localhost:5000/featured')
  },
  {
    path: "/allMovies",
    element: <AllMoviesLayout></AllMoviesLayout>,
    loader: () => fetch('http://localhost:5000/movies')
  },
  {
    path: "/movie/:id",
    element: <MovieDetailsLayout></MovieDetailsLayout>,
    loader: ({params}) => fetch(`http://localhost:5000/movie/${params.id}`)
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
    element: <RegisterLayout></RegisterLayout>,
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
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