import Swal from 'sweetalert2'

const AddMovie = () => {

    const handleAddMovie = event => {
        event.preventDefault();

        const form = event.target;
        const poster = form.poster.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const year = form.year.value;
        const rating = form.rating.value;
        const summary = form.summary.value;

        const newMovie = { poster, genre, duration, year, rating, summary };
        // console.log(newMovie)

        // send data to the server
        fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                Swal.fire({
                    title: 'Congratulations!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            })
    }
    return (
        <div>
            <p className="text-4xl text-center py-8 font-bold">Add Your Movie</p>
            <div className="hero px-10">
                <div className="card w-full bg-base-100 shadow-2xl">
                    <form onSubmit={handleAddMovie} className="card-body">
                        <fieldset className="fieldset">

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Movie Poster</label>
                                    <input type="url" name="poster" className="input w-full" placeholder="Movie Poster url" />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Movie Title</label>
                                    <input type="text" name="title" className="input w-full" placeholder="Movie Title" />
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Genre</label>
                                    <input type="text" name="genre" className="input w-full" placeholder="Genre" />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Duration</label>
                                    <input type="text" name="duration" className="input w-full" placeholder="Duration" />
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Release Year</label>
                                    <input type="text" name="year" className="input w-full" placeholder="Release Year" />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Rating</label>
                                    <input type="text" name="rating" className="input w-full" placeholder="Rating" />
                                </div>
                            </div>

                            <div className="flex gap-10">
                                <div className="flex flex-col w-1/2">
                                    <label className="fieldset-label hidden md:block">Summary</label>
                                    <input type="text" name="summary" className="input w-full" placeholder="Summary" />
                                </div>
                                <div className="flex flex-col w-1/2">

                                </div>
                            </div>

                            <button className="btn btn-neutral mt-4">Add Movie</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;