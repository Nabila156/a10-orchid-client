import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UpdateMovie from "../movies/UpdateMovie";
import { useLoaderData } from "react-router-dom";

const UpdateMovieLayout = () => {

    const movie = useLoaderData();

    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <Helmet>
                <title>Orchid | Update Movie</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="flex-grow">
                <UpdateMovie movie={movie}></UpdateMovie>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateMovieLayout;