import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../ErrorPge";



const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }

  ]);

  export default router;