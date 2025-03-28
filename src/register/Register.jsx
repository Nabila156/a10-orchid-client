import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    createUserWithEmailAndPassword(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log('error', error)
        })

    return (
        <div className="bg-cover min-h-screen bg-[url(https://i.ibb.co.com/33Qhg2N/adrien-brun-P7y-Rvz-Olp-U-unsplash.jpg)]">

            <div className="text-white mx-[5%] pt-8 text-lg lg:text-xl font-bold flex items-center gap-2">
                <Link to={'/'}><HiArrowNarrowLeft /></Link>
            </div>

            <div className="ml-[40%] mr-[5%]">
                <p className="text-white font-extrabold text-3xl">Register & Start Watching!</p>
                <form className="flex flex-col pt-12" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Name" className="w-full input"
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name?.type === "required" && (
                        <p className="text-white" role="alert">Name is required</p>
                    )}


                    <input type="email" placeholder="Email" className="w-full mt-2 input"
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p className="text-white" role="alert">{errors.email.message}</p>}

                    <input type="url" placeholder="Photo-URL" className="w-full mt-2 input"
                        {...register("photoUrl", { required: "Photo-URL is required" })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.photoUrl && <p className="text-white" role="alert">{errors.photoUrl.message}</p>}

                    <input type="password" placeholder="Password" className="w-full mt-2 input"
                        {...register("password", { required: "Password is required" })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                    {errors.password && <p className="text-white" role="alert">{errors.password.message}</p>}


                    <button className="btn mt-2 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-xl font-bold bg-gradient-to-r from-orange-700 to-blue-300 hover:from-slate-200 hover:to-slate-200">Register</button>
                </form>

            </div>
        </div>
    );
};

export default Register;