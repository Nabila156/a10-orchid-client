
import MovieCard from "./MovieCard";


const AllMovies = ({ movies }) => {

    return (
        <div className="font-roboto bg-gray-100">
            <h1 className="text-center pt-5 font-extrabold text-2xl md:text-4xl text-black">All Movies</h1>
            <div className='py-12 mx-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {movies.map((movie, index) => <MovieCard key={index} movie={movie}></MovieCard>)}
            </div>

        </div>
    );
};

export default AllMovies;