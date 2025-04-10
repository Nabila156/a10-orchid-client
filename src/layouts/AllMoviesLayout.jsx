import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import AllMovies from "../movies/AllMovies";
import Navbar from "../Navbar";

const AllMoviesLayout = () => {
    const movies = useLoaderData();

    return (
        <div className="font-roboto min-h-screen flex flex-col">
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