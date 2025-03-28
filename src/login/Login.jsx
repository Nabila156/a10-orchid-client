import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ImGoogle } from "react-icons/im";

const login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, setLoading, handleGoogleSignIn } = useContext(AuthContext);
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

      
    }

    return (
        <div className="mx-[10%]">
            <Link to={'/'}><HiArrowNarrowLeft className="text-white mx-[5%] pt-8 text-lg lg:text-xl font-bold flex items-center gap-2" /></Link>
            <div className="flex flex-col-reverse gap-12 lg:flex-row">
                <div className="w-[60%]">
                    <form className=" flex flex-col py-12" onSubmit={handleSubmit(onSubmit)}>
                    
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


                        <button className="btn mt-2 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-base lg:text-xl font-bold bg-gradient-to-r from-orange-700 to-blue-300 hover:from-slate-200 hover:to-slate-200">Login</button>

                        <p className="text-center mt-5">OR</p>

                        <Link to='/' onClick={handleGoogleSignIn} className='btn mt-3 hover:scale-95 transition-transform duration-300 text-blue-950 hover:text-black text-base lg:text-xl font-bold bg-gradient-to-r from-orange-700 to-blue-300 hover:from-slate-200 hover:to-slate-200'><ImGoogle />Login with Google</Link>


                        <p className='text-center pt-2'>Don't you have an account? Please <Link to='/register' className='font-bold text-orange-800'>Register</Link >.</p>

                        {
                            error && <p className='text-red-500 text-center font-bold'>{error}</p>
                        }
                    </form>

                </div>
                <div className="">
                    <img src="https://i.ibb.co.com/Dn3JHMf/Myke-simon-ats-Uq-Im3wxo-unsplash.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default login;