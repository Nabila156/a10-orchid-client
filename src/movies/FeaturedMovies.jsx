import { useTheme } from "next-themes";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const FeaturedMovies = ({ movies }) => {

    const { theme, setTheme } = useTheme();
    // console.log(movies)
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    return (
        <div className="font-roboto mt-8">
            <h1 className={`text-center font-extrabold text-black text-2xl md:text-4xl ${theme === 'dark' ? 'text-white' : ''}`}>Featured Movies</h1>
            <div className='my-12 mx-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {movies.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>)}
            </div>
            <div className="flex items-center justify-center">
                <Link to={'/allMovies'} className="btn btn-lg hover:scale-90 transition-transform duration-300 font-bold text-xl bg-purple-300 text-black">See All Movies</Link>
            </div>
        </div>
    );
};

export default FeaturedMovies;


