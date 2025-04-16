
import { useState } from "react";
import MovieCard from "./MovieCard";
import { IoSearch } from "react-icons/io5";

const AllMovies = ({ movies }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter movies by title (case-insensitive)
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="font-roboto bg-gray-100 min-h-screen">
            <h1 className="text-center pt-5 font-extrabold text-2xl md:text-4xl text-black">All Movies</h1>

            {/* Search Input */}
            <div className="flex justify-center mt-6">
                <div className="relative w-full mx-20">
                    <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                        type="text"
                        placeholder="Search movies by title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Movie Cards */}
            <div className='py-12 mx-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600">No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default AllMovies;
