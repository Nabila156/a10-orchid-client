import Banner from "../Banner";
import FeaturedMovies from "../movies/FeaturedMovies";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const HomeLayout = () => {
    const movies = useLoaderData();
    const {loading}= useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="flex-grow">
                <Banner></Banner>
                <FeaturedMovies movies={movies}></FeaturedMovies>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;