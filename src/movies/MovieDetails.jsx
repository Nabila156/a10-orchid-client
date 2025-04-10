import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const MovieDetails = () => {

    const { loading } = useContext(AuthContext);
    const movie = useLoaderData();
    const { title, poster, genre, duration, year, rating, summary } = movie;

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    return (
        <div className="min-h-screen bg-gray-100 ">
            <div className="text-black mx-[5%] pt-8 text-lg lg:text-2xl font-bold">
                <Link to={'/allMovies'}><HiArrowNarrowLeft /></Link>
            </div>
            <div className="flex items-center justify-center p-6">
                <div className="bg-white shadow-xl rounded-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
                    {/* Poster */}
                    <div className="md:w-1/2">
                        <img
                            src={poster}
                            alt="poster"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Movie Info */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-3">{title}</h1>
                            <p className="text-gray-600 text-sm mb-4">Released: {year}</p>

                            <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4">
                                <span className="bg-gray-200 px-3 py-1 rounded-full">🎭 {genre}</span>
                                <span className="bg-gray-200 px-3 py-1 rounded-full">🕒 {duration} mins</span>
                                <span className="bg-yellow-200 px-3 py-1 rounded-full">⭐ {rating}/5</span>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-base">{summary}</p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mt-6">
                                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition-all">
                                    🗑️ Delete Movie
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-all">
                                    ⭐ Add to Favorite
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;