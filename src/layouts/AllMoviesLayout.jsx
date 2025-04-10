import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import AllMovies from "../movies/AllMovies";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";

const AllMoviesLayout = () => {
    const movies = useLoaderData();

    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <Helmet>
                <title>Orchid | All Movies</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="flex-grow">
                <AllMovies movies={movies}></AllMovies>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllMoviesLayout;