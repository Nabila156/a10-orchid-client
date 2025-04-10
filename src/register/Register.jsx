import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { ImGoogle } from "react-icons/im";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { createUser, setUser, setLoading, handleGoogleSignIn, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data)

        const email = data.email;
        const password = data.password;
        const displayName = data.name;
        const photoURL = data.photoURL;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                return updateUserProfile({ displayName, photoURL }); // Wait for this to finish
            })
            .then(() => {  // navigate after profile is updated
                navigate('/');
                toast.success("Registration successful!");
            })
            .catch((error) => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="bg-cover font-merienda bg-center min-h-screen bg-[url('https://i.ibb.co.com/33Qhg2N/adrien-brun-P7y-Rvz-Olp-U-unsplash.jpg')]">

            <div className="text-white mx-[5%] pt-8 text-lg lg:text-2xl font-bold">
                <Link to={'/'}><HiArrowNarrowLeft /></Link>
            </div>

            <div className="ml-[40%] mr-[5%]">
                <p className="text-white font-merienda font-extrabold text-2xl md:text-4xl">Register & Start Watching!</p>
                <form className="flex flex-col py-12" onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("photoURL", { required: "Photo-URL is required" })}
                        aria-invalid={errors.photoURL ? "true" : "false"}
                    />
                    {errors.photoURL && <p className="text-white" role="alert">{errors.photoURL.message}</p>}

                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full mt-2 input"
                            {...register("password", {
                                required: "Password is required",
                                validate: {
                                    hasUppercase: (value) => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter.",
                                    hasLowercase: (value) => /[a-z]/.test(value) || "Password must contain at least one lowercase letter.",
                                    minLength: (value) => value.length >= 6 || "Password must be at least 6 characters long."

                                }
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className="text-white" role="alert">{errors.password.message}</p>}

                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-sm absolute right-6 top-[10px]'>
                            {
                                showPassword ? <PiEyeLight /> : <PiEyeSlashLight />
                            }
                        </button>
                    </div>


                    <button className="btn mt-6 hover:scale-95 text-base lg:text-xl transition-transform duration-300 text-blue-950 hover:text-black font-extrabold bg-gradient-to-r from-orange-700 to-blue-300 hover:from-slate-200 hover:to-slate-200">Register</button>

                    <p className="text-center text-white mt-5">OR</p>

                    <Link to='/' onClick={handleGoogleSignIn} className='btn mt-3 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-base lg:text-xl font-extrabold bg-gradient-to-r from-orange-700 to-blue-300 hover:from-slate-200 hover:to-slate-200'><ImGoogle />Register with Google</Link>


                    <p className='text-white pt-2'>Do you already have an account? Please <Link to='/login' className='font-bold text-orange-600'>Login</Link >.</p>

                    {
                        error && <p className='text-red-500 text-center font-bold'>{error}</p>
                    }
                </form>

            </div>
        </div>
    );
};

export default Register;