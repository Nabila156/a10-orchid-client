import Banner from "../Banner";
import FeaturedMovies from "../movies/FeaturedMovies";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useLoaderData } from "react-router-dom";

const HomeLayout = () => {
    const movies = useLoaderData();
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