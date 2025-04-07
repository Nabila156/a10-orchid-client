
const MovieCard = ({ movie }) => {
    const { title, poster, genre, duration, year, rating } = movie;
    return (
        <div className="flex flex-col bg-purple-100 rounded-none shadow-lg border min-w-72 w-full hover:scale-105 transition duration-300 overflow-hidden">
            <img src={poster} alt={title} className="w-full aspect-video" />
            <div className="p-4 flex flex-col gap-2 flex-1">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-gray-600 text-sm mt-1">{genre}</p>
                </div>
                <div className="text-gray-700 text-sm space-y-1">
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Year:</strong> {year}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                </div>
                <button className="btn btn-sm font-bold text-base hover:scale-90 transition-transform duration-300 text-black bg-gradient-to-r from-purple-600 to-orange-600 mt-auto w-full">See Details</button>
            </div>
        </div>
    );
};

export default MovieCard;