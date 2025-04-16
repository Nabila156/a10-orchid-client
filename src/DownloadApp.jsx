
const DownloadApp = () => {
    return (
        <div className="flex items-center justify-center bg-gray-900 px-4 py-7">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row gap-4">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src="https://i.ibb.co.com/0Rmbpd82/00000483970.jpg"
                        alt="Movie App"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Download Our Movie App
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Get instant access to thousands of movies. Watch, stream, and enjoy your favorite films anytime, anywhere!
                    </p>
                    <a
                        href="https://play.google.com/store/games?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center bg-purple-600 hover:bg-purple-100 text-white hover:text-black px-6 py-3 rounded-xl font-semibold transition"
                    >
                        Download Now
                    </a>
          </div>
            </div>
        </div>
    );
};

export default DownloadApp;
