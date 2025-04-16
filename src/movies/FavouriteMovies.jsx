import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const FavouriteMovies = () => {

    const { loading, user } = useContext(AuthContext);
    const [favouriteMovies, setFavouriteMovies] = useState([]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/favourites?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setFavouriteMovies(data);
                });
        }
    }, [user?.email]);

    const handleDeleteFavorite = (id) => {
        fetch(`http://localhost:5000/favourites/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setFavouriteMovies(prev => prev.filter(movie => movie._id !== id));
                    Swal.fire("Deleted!", "Movie removed from favorites.", "success");
                }
            });
    };


    return (
        <div className="p-6">
            {favouriteMovies.length === 0 ? (
                <div className="text-center text-red-600 text-xl font-medium mt-10">
                    No favourite movie found 😔
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favouriteMovies.map(movie => (
                        <div key={movie._id} className="border bg-purple-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300">
                            <img src={movie.poster} alt={movie.title} className="w-full aspect-video object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl text-black font-semibold mb-1">{movie.title}</h2>
                                <p className="text-sm text-gray-600">🎭 {movie.genre}</p>
                                <p className="text-sm text-gray-600">🕒 {movie.duration} mins</p>
                                <p className="text-sm text-gray-600">📅 {movie.year}</p>
                                <p className="text-sm text-yellow-600">⭐ {movie.rating}/5</p>
                                <button
                                    onClick={() => handleDeleteFavorite(movie._id)}
                                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                                >
                                    🗑️ Delete Favourite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavouriteMovies;