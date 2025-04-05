

const FeaturedMovieCard = ({ movie }) => {
    const { title, poster, genre, duration, year, rating } = movie;
    return (
        <div className="card card-compact rounded-none shadow-lg border w-72 hover:scale-105 transform transition duration-300">
            <img src={poster} alt={title} className="w-full h-2/3 object-cover" />
            <div className="p-4">
                <div className="flex-grow overflow-auto h-24">
                    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-gray-600 mt-2">{genre}</p>
                </div>
                <div className="mt-5 text-gray-700">
                    <p><strong>Duration:</strong> {duration}</p>
                    <p><strong>Release Year:</strong> {year}</p>
                    <p><strong>Rating:</strong> {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMovieCard;