import { useTheme } from "next-themes";
import MovieCard from "./MovieCard";

const FeaturedMovies = ({ movies }) => {

    const { theme, setTheme } = useTheme();
    // console.log(movies)

    return (
        <div className="font-roboto mt-8">
            <h1 className={`text-center font-extrabold text-black text-2xl md:text-4xl ${theme === 'dark' ? 'text-white' : ''}`}>Featured Movies</h1>
            <div className='my-12 mx-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               { movies.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>)}
            </div>
            
        </div>
    );
};

export default FeaturedMovies;


