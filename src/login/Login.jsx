import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ImGoogle } from "react-icons/im";
import { toast } from "react-toastify";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, setUser, setLoading, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef(null);

    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues
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

                toast.success("Login successful!", {
                    draggable: true,
                });
            })
            .catch((err) => {
                toast.error(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleForgetPassword = () => {
        const email = getValues("email");
        // console.log("Email before navigating:", email);
        navigate("/forgot-password", { state: { email } });
    };



    return (
        <div className="lg:bg-none font-merienda bg-cover bg-center min-h-screen bg-[url('https://i.ibb.co.com/Dn3JHMf/Myke-simon-ats-Uq-Im3wxo-unsplash.jpg')]">

            <div className="flex lg:flex-row backdrop-blur-sm">
                <div className="w-full lg:w-[60%] lg:bg-black px-[5%]">
                    <div className="text-white pt-8 text-lg lg:text-2xl font-bold">
                        <Link to={'/'}><HiArrowNarrowLeft /></Link>
                    </div>
                    <form className=" flex flex-col py-12" onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-center text-white mb-6 font-extrabold text-2xl md:text-4xl">Access Your Cinematic Universe</p>
                        <input type="email"
                            placeholder="Email"
                            className="w-full mt-2 input"
                            {...register("email", { required: "Email Address is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className="text-white" role="alert">{errors.email.message}</p>}


                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full mt-2 input"
                                {...register("password", { required: "Password is required" })}
                                aria-invalid={errors.mail ? "true" : "false"}
                            />

                            <label onClick={handleForgetPassword} className="label">
                                <p to={'/forgot-password'} className="link link-hover text-xs text-white">Forgot password?</p>
                            </label>

                            {errors.password && <p className="text-white" role="alert">{errors.password.message}</p>}

                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-sm absolute right-6 top-[10px]'>
                                {
                                    showPassword ? <PiEyeLight /> : <PiEyeSlashLight />
                                }
                            </button>
                        </div>


                        <button className="btn mt-5 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-base lg:text-xl font-extrabold bg-gradient-to-r from-pink-600 to-blue-300 hover:from-slate-200 hover:to-slate-200">Login</button>

                        <p className="text-center text-white mt-5">OR</p>

                        <Link to='/' onClick={handleGoogleSignIn} className='btn mt-3 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-base lg:text-xl font-extrabold bg-gradient-to-r from-pink-600 to-blue-300 hover:from-slate-200 hover:to-slate-200'><ImGoogle />Login with Google</Link>


                        <p className='text-white pt-2'>Don't you have an account? Please <Link to='/register' className='font-bold text-pink-600'>Register</Link >.</p>

                        {
                            error && <p className='text-red-500 text-center font-bold'>{error}</p>
                        }
                    </form>

                </div>
                <div className="hidden lg:block">
                    <img className="h-full" src="https://i.ibb.co.com/Dn3JHMf/Myke-simon-ats-Uq-Im3wxo-unsplash.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;