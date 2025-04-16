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
import UpdateMovieLayout from "../layouts/UpdateMovieLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch('https://orchid-server-gilt.vercel.app/featured')
  },
  {
    path: "/allMovies",
    element: <AllMoviesLayout></AllMoviesLayout>,
    loader: () => fetch('https://orchid-server-gilt.vercel.app/movies')
  },
  {
    path: "/movie/:id",
    element:
      <PrivateRoute>
        <MovieDetailsLayout></MovieDetailsLayout>
      </PrivateRoute>,
    loader: ({ params }) => fetch(`https://orchid-server-gilt.vercel.app/movie/${params.id}`)
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
    path: "/updateMovie/:id",
    element: <PrivateRoute>
      <UpdateMovieLayout></UpdateMovieLayout>
    </PrivateRoute>,
    loader:({params})=>fetch(`https://orchid-server-gilt.vercel.app/movie/${params.id}`)
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }

]);

export default router;