import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../ErrorPage";
import AddMovieLayout from "../layouts/AddMovieLayout";


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
        path: "*",
        element: <ErrorPage></ErrorPage>
      }

  ]);

  export default router;