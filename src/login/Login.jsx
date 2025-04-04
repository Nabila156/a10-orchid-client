import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ImGoogle } from "react-icons/im";
import { toast } from "react-toastify";

const login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, setUser, setLoading, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        // console.log(data)

        const email = data.email;
        const password = data.password;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            });


    }

    return (
        <div className="lg:bg-none font-merienda bg-cover bg-center min-h-screen bg-[url('https://i.ibb.co.com/Dn3JHMf/Myke-simon-ats-Uq-Im3wxo-unsplash.jpg')]">
            <div className="backdrop-blur-sm">
                <div className="text-white mx-[5%] pt-8 text-lg lg:text-2xl font-bold">
                    <Link to={'/'}><HiArrowNarrowLeft /></Link>
                </div>
                <div className="flex flex-col gap-12 lg:flex-row mx-[20%]">
                    <div className="w-full lg:w-[60%]">
                        <form className=" flex flex-col py-12" onSubmit={handleSubmit(onSubmit)}>
                            <p className="text-center text-white mb-6 font-extrabold text-2xl md:text-4xl">Access Your Cinematic Universe</p>
                            <input type="email" placeholder="Email" className="w-full mt-2 input"
                                {...register("email", { required: "Email Address is required" })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && <p className="text-white" role="alert">{errors.email.message}</p>}


                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full mt-2 input"
                                    {...register("password", { required: "Password is required" })}
                                    aria-invalid={errors.mail ? "true" : "false"}
                                />
                                {errors.password && <p className="text-white" role="alert">{errors.password.message}</p>}

                                <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-sm absolute right-6 top-[10px]'>
                                    {
                                        showPassword ? <PiEyeLight /> : <PiEyeSlashLight />
                                    }
                                </button>
                            </div>


                            <button className="btn mt-2 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-base lg:text-xl font-extrabold bg-gradient-to-r from-pink-600 to-blue-300 hover:from-slate-200 hover:to-slate-200">Login</button>

                            <p className="text-center mt-5">OR</p>

                            <Link to='/' onClick={handleGoogleSignIn} className='btn mt-3 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-base lg:text-xl font-extrabold bg-gradient-to-r from-pink-600 to-blue-300 hover:from-slate-200 hover:to-slate-200'><ImGoogle />Login with Google</Link>


                            <p className='text-center text-white pt-2'>Don't you have an account? Please <Link to='/register' className='font-bold text-pink-600'>Register</Link >.</p>

                            {
                                error && <p className='text-red-500 text-center font-bold'>{error}</p>
                            }
                        </form>

                    </div>
                    <div className="hidden lg:block">
                        <img src="https://i.ibb.co.com/Dn3JHMf/Myke-simon-ats-Uq-Im3wxo-unsplash.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default login;