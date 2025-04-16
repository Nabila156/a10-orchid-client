
import { useLoaderData } from "react-router-dom";
import MovieDetails from "../movies/MovieDetails";
import Navbar from "../Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

const MovieDetailsLayout = () => {

    const { loading } = useContext(AuthContext);
    const movie = useLoaderData();

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }


    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <Helmet>
                <title>Orchid | Details</title>
            </Helmet>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main className="flex-grow">
            <MovieDetails movie={movie}></MovieDetails>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default MovieDetailsLayout;