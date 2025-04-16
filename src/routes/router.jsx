import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../ErrorPage";
import AddMovieLayout from "../layouts/AddMovieLayout";
import ForgotPassword from "../login/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import MovieDetailsLayout from "../layouts/MovieDetailsLayout";
import AllMoviesLayout from "../layouts/AllMoviesLayout";
import RegisterLayout from "../layouts/RegisterLayout";
import LoginLayout from "../layouts/LoginLayout";
import MyFavouriteLayout from "../layouts/MyFavouriteLayout";
import TestimonialsLayout from "../layouts/TestimonialsLayout";

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
    element:
      <PrivateRoute>
        <MovieDetailsLayout></MovieDetailsLayout>
      </PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/movie/${params.id}`)
  },
  {
    path: "/addMovie",
    element:
      <PrivateRoute>
        <AddMovieLayout></AddMovieLayout>
      </PrivateRoute>
  },
  {
    path: "/myFavourite",
    element:
      <PrivateRoute>
        <MyFavouriteLayout></MyFavouriteLayout>
      </PrivateRoute>
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
    path: "/testimonials",
    element: <TestimonialsLayout></TestimonialsLayout>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }

]);

export default router;