import { useTheme } from "next-themes";
import FeaturedMovieCard from "./FeaturedMovieCard";

const FeaturedMovies = ({ movies }) => {

    const { theme, setTheme } = useTheme();
    console.log(movies)

    return (
        <div className="font-roboto mt-8">
            <h1 className={`text-center font-extrabold text-black text-2xl md:text-4xl ${theme === 'dark' ? 'text-white' : ''}`}>Featured Movies</h1>
            <div className='my-12 mx-12 grid gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               { movies.map((movie, index) => <FeaturedMovieCard key={index} movie={movie}></FeaturedMovieCard>)}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {movies.map(movie => (
                    <div
                        key={movie._id}
                        className={`p-4 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-purple-100' : 'bg-white'
                            }`}
                    >
                        <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                                }`}>
                                {movie.title}
                            </h3>
                            <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                Genre: {movie.genre}
                            </p>
                            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                Rating: {movie.rating}/5
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default FeaturedMovies;



// import { useEffect, useState } from 'react';
// import { useTheme } from "next-themes";

// const FeaturedMovies = () => {
//   const { theme } = useTheme();
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/movies');
//         if (!response.ok) throw new Error('Failed to fetch movies');
//         const data = await response.json();
//         setMovies(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   if (loading) return <div className="text-center">Loading movies...</div>;
// //   if (error) return <div className="text-center text-red-500">Error: {error}</div>;

//   return (
//     <div className="font-roboto mt-8 p-4">
//       <h1 className={`text-center font-extrabold text-2xl md:text-4xl ${
//         theme === 'dark' ? 'text-white' : 'text-black'
//       }`}>
//         Featured Movies ({movies.length})
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//         {movies.map(movie => (
//           <div
//             key={movie._id}
//             className={`p-4 rounded-lg shadow-lg ${
//               theme === 'dark' ? 'bg-gray-800' : 'bg-white'
//             }`}
//           >
//             <img
//               src={movie.poster}
//               alt={movie.title}
//               className="w-full h-64 object-cover rounded-t-lg"
//             />
//             <div className="p-4">
//               <h3 className={`text-xl font-bold ${
//                 theme === 'dark' ? 'text-white' : 'text-gray-800'
//               }`}>
//                 {movie.title}
//               </h3>
//               <p className={`mt-2 ${
//                 theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
//               }`}>
//                 Genre: {movie.genre}
//               </p>
//               <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Rating: {movie.rating}/5
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedMovies;