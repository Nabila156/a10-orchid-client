const PopularCategories = () => {
    return (
        <div className="bg-purple-100 py-10 px-4">
            <h1 className="text-center text-black text-3xl font-extrabold mb-6">Popular Movies</h1>
            <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700">
                From action-packed blockbusters to heartwarming classics—find your next favorite film here!
                Dive into curated picks, hidden gems, and all-time favorites—all in one place!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {/* Comedy */}
                <div className="relative rounded-lg overflow-hidden shadow-md group">
                    <img
                        src="https://i.ibb.co.com/5WxXM7Ng/a8808e82903c9912-600x338.jpg"
                        alt="Comedy"
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-xl font-bold">Comedy</h2>
                    </div>
                </div>

                {/* Horror */}
                <div className="relative rounded-lg overflow-hidden shadow-md group">
                    <img
                        src="https://i.ibb.co.com/TBJHdTyS/images-q-tbn-ANd9-Gc-QStc-X8-Ev-H8-O5q7a5-Dj-Eq-MNat-Vvn-Fqd-Gi-Drg-Q-s.jpg"
                        alt="Horror"
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-xl font-bold">Horror</h2>
                    </div>
                </div>

                {/* Drama */}
                <div className="relative rounded-lg overflow-hidden shadow-md group">
                    <img
                        src="https://i.ibb.co.com/sv363f8c/images-q-tbn-ANd9-Gc-TDFdq07-Vf-Ie2xz-C7-E2wk-Dc7-V9d-WGq-Jot9-VEg-s.jpg"
                        alt="Drama"
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-xl font-bold">Drama</h2>
                    </div>
                </div>

                {/* Thriller */}
                <div className="relative rounded-lg overflow-hidden shadow-md group">
                    <img
                        src="https://i.ibb.co.com/4ZwH2MdB/AAAAQWPLLUGrq1jr-NBq-DZAF63-Wr-IKX4we6s-Xm-Nq-P9-Naax-JWJ-o3-PQxjwk-Wu1-Zpn3his-Ua-Ss-R7w-OWm-Zpcrd7.jpg"
                        alt="Thriller"
                        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-white text-xl font-bold">Thriller</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;
