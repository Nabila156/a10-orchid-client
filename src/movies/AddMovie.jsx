import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddMovie = () => {

    const navigate = useNavigate();

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

        // Validation for duration
        if (duration <= 60) {
            toast.error("Duration must be greater than 60 minutes.", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark"
            });
            return;
        }

        // Validation for summary

        if (summary.length < 10) {
            toast.error("Summary must be at least 10 characters long!", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark"
            });
            return;
        }


        if (rating === 0) {
            toast.error("You must select a rating to add a movie.", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark"
            });
            return;

        }


        // send data to the server
        fetch('https://orchid-server-gilt.vercel.app/movies', {
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
                    text: 'Movie added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                    .then(() => {
                        navigate('/allmovies');
                    })
            })

        // Reset form fields and rating after successful submission
        form.reset();
        setRating(0);

    }


    return (
        <div className='bg-gray-100 pb-10'>
            <p className="text-4xl text-center text-black py-8 font-bold">Add Your Movie</p>
            <div className="hero px-10">
                <div className="card w-full bg-base-100 shadow-2xl">
                    <form onSubmit={handleAddMovie} className="card-body">
                        <fieldset className="fieldset">

                            <div className='flex md:gap-6 items-center'>
                                <div className='min-w-[70%] w-full'>
                                    <div className="md:flex gap-8">
                                        <div className="mt-2 flex flex-col w-1/2">
                                            <label className="fieldset-label">Movie Poster</label>
                                            <input type="url" name="poster" className="input w-full" placeholder="Movie Poster url" required />
                                        </div>
                                        <div className="flex mt-2 flex-col w-1/2">
                                            <label className="fieldset-label">Movie Title</label>
                                            <input type="text" name="title" className="input w-full" placeholder="Movie Title" required />
                                        </div>
                                    </div>

                                    <div className="md:flex gap-8">
                                        <div className="mt-2 flex flex-col w-1/2">
                                            <label className="fieldset-label">Genre</label>
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
                                        <div className="mt-2 flex flex-col w-1/2">
                                            <label className="fieldset-label">Duration(mins)</label>
                                            <input type="number" name="duration" className="input w-full" placeholder="Duration" required />
                                        </div>
                                    </div>

                                    <div className="flex gap-8">
                                        <div className="mt-2 flex flex-col w-1/2">
                                            <label className="fieldset-label">Release Year</label>
                                            <select name="year" className="input w-full text-gray-400" required>
                                                <option value="" disabled hidden>Release Year</option>
                                                <option value="2025">2025</option>
                                                <option value="2024">2024</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                            </select>
                                        </div>
                                        <div className='w-1/2'>

                                        </div>

                                    </div>
                                    <div className='w-1/2 flex flex-col mt-2'>
                                        <label className="fieldset-label">Summary</label>
                                        <textarea type="text" name='summary' className="textarea w-full" placeholder="Summary" required></textarea>
                                    </div>

                                </div>

                                <div>
                                    <label className="fieldset-label hidden md:block">Rating</label>
                                    <Rating
                                        onClick={handleRatingChange}
                                        initialValue={rating} // Set the current rating value
                                        fillColor="#ffd700"
                                        allowHalfIcon
                                        required
                                    />
                                </div>
                            </div>

                            <button className="btn btn-neutral text-xl mt-4">Add Movie</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;