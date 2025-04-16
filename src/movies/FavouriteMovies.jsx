import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const FavouriteMovies = () => {
    const {user}=useContext(AuthContext)
    // console.log(user)
    return (
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {favoriteMovies.map(movie => (
    //       <div key={movie._id} className="border p-4 rounded shadow">
    //         <img src={movie.posterUrl} alt={movie.title} className="w-full h-60 object-cover" />
    //         <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
    //         <p>Genre: {movie.genre}</p>
    //         <p>Duration: {movie.duration}</p>
    //         <p>Release Year: {movie.releaseYear}</p>
    //         <p>Rating: {movie.rating}</p>
    //         <button 
    //           onClick={() => handleDelete(movie._id)}
    //           className="bg-red-500 text-white px-4 py-2 rounded mt-2"
    //         >
    //           Delete Favorite
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    <div></div>
      
    );
};

export default FavouriteMovies;