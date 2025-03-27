import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';


const AddMovie = () => {

    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        setRating(newRating)
    }

    const handleAddMovie = event => {
        event.preventDefault();

        const form = event.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const year = form.year.value;
        const summary = form.summary.value;

        const newMovie = { title, poster, genre, duration, year, rating, summary };
        // console.log(newMovie)


        // Validation for movie title

        if (title.length < 2) {
            toast.error("Title must be at least 2 characters long!", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark"
            });
            return;
        }


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

                            <div className='flex gap-6 items-center'>
                                <div className='w-full'>
                                    <div className="flex gap-8">
                                        <div className="flex flex-col w-1/2">
                                            <label className="fieldset-label hidden md:block">Movie Poster</label>
                                            <input type="url" name="poster" className="input w-full" placeholder="Movie Poster url" required />
                                        </div>
                                        <div className="flex flex-col w-1/2">
                                            <label className="fieldset-label hidden md:block">Movie Title</label>
                                            <input type="text" name="title" className="input w-full" placeholder="Movie Title" required />
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="flex flex-col w-1/2">
                                            <label className="fieldset-label hidden md:block">Genre</label>
                                            <select name="genre" className="input w-full text-gray-400" required>
                                                <option value="" disabled hidden>Genre</option>
                                                <option value="Action">Action</option>
                                                <option value="Comedy">Comedy</option>
                                                <option value="Drama">Drama</option>
                                                <option value="Horror">Horror</option>
                                                <option value="Romance">Romance</option>
                                                <option value="Sci-Fi">Sci-Fi</option>
                                                <option value="Thriller">Thriller</option>
                                                <option value="Animation">Animation</option>
                                                <option value="Documentary">Documentary</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col w-1/2">
                                            <label className="fieldset-label hidden md:block">Duration</label>
                                            <input type="text" name="duration" className="input w-full" placeholder="Duration" required />
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="flex flex-col w-1/2">
                                            <label className="fieldset-label hidden md:block">Release Year</label>
                                            <input type="text" name="year" className="input w-full" placeholder="Release Year" required />
                                        </div>
                                        <div className="flex flex-col w-1/2">
                                            <label className="fieldset-label hidden md:block">Summary</label>
                                            <input type="text" name="summary" className="input w-full" placeholder="Summary" required />
                                        </div>

                                    </div>

                                </div>

                                <div>
                                    <label className="fieldset-label hidden md:block">Rating</label>
                                    <Rating
                                        onClick={handleRatingChange}
                                        ratingValue={rating} // Set the current rating value
                                        fillColor="#ffd700"
                                        allowHalfIcon
                                    />
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