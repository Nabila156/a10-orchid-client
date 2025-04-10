
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = ({ movie }) => {

    const navigate = useNavigate();
    const { _id, title, poster, genre, duration, year, rating, summary } = movie;
    const handleDelete = _id => {
        // console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movie/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .then(navigate('/allMovies'))

                // console.log('delete confirmed')
            }
        });
    }


    return (
        <div className="bg-gray-100 ">
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
                                <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition-all">
                                    🗑️ Delete Movie
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-all">
                                    ❤️ Add to Favorite
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