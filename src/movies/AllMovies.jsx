import { useTheme } from "next-themes";
import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";
import { HiArrowNarrowLeft } from "react-icons/hi";


const AllMovies = () => {

    const movies = useLoaderData();
    const { theme, setTheme } = useTheme();

    return (
        <div className="font-roboto mt-8">
            <Link to={'/'}><HiArrowNarrowLeft className={`text-black ${theme === 'dark' ? "text-white" : ""} ml-[5%] mt-8 text-2xl md:text-4xl font-bold`} /></Link>
            <h1 className={`text-center font-extrabold text-black text-2xl md:text-4xl ${theme === 'dark' ? 'text-white' : ''}`}>All Movies</h1>
            <div className='my-12 mx-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {movies.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>)}
            </div>

        </div>
    );
};

export default AllMovies;