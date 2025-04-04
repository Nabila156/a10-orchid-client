import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="font-roboto min-h-screen relative">
            {/* Background Image with Brightness Adjustment */}
            <div
                className="absolute inset-0 bg-[url('https://i.ibb.co.com/VpCs6SqW/images.png')] brightness-50 z-10">
            </div>

            {/* Main Content */}
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-pink-500 z-10 pl-16 pt-8 text-4xl font-bold absolute top-0 left-0 m-4">
                    <Link to={'/login'}><HiArrowNarrowLeft /></Link>
                </div>
                <form onSubmit={handleSubmit} className="card-body card bg-purple-100 mx-auto my-10 w-full max-w-xs md:max-w-lg rounded-2xl shadow-xl z-20">
                    <h1 className="text-center font-hand_writing text-black text-2xl font-extrabold md:text-4xl mb-5">Reset Password</h1>
                    <div className="form-control">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="input input-bordered w-full" required />
                    </div>

                    <a
                        href="https://mail.google.com"
                        target="_blank"
                        className="btn mt-5 hover:scale-95 transition-transform duration-300 text-black text-base lg:text-xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-200 hover:from-slate-200 hover:to-slate-200">Reset Password</a>

                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;