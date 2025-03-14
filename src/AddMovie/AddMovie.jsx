

const AddMovie = () => {
    return (
        <div>
            <p className="text-4xl text-center py-8 font-bold">Add Your Movie</p>
            <div className="hero px-10">
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Movie Poster</label>
                                    <input type="url" className="input w-full" placeholder="Movie Poster url" />
                                </div>
                                <div className="flex flex-col w-1/2"> 
                                    <label className="fieldset-label hidden md:block">Movie Title</label>
                                    <input type="text" className="input w-full" placeholder="Movie Title" />
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Genre</label>
                                    <input type="text" className="input w-full" placeholder="Genre" />
                                </div>
                                <div className="flex flex-col w-1/2"> 
                                    <label className="fieldset-label hidden md:block">Duration</label>
                                    <input type="text" className="input w-full" placeholder="Duration" />
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Release Year</label>
                                    <input type="text" className="input w-full" placeholder="Release Year" />
                                </div>
                                <div className="flex flex-col w-1/2"> 
                                    <label className="fieldset-label hidden md:block">Rating</label>
                                    <input type="text" className="input w-full" placeholder="Rating" />
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2"> 
                                    <label className="fieldset-label hidden md:block">Summary</label>
                                    <input type="text" className="input w-full" placeholder="Summary" />
                                </div>
                                <div className="flex flex-col w-1/2">

                                </div>
                            </div>
                            
                            <button className="btn btn-neutral mt-4">Add Movie</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;