import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex gap-10 min-h-screen bg-slate-300'>
            <div className='min-w-[60%] w-full'>
                <img className='h-full' src="https://i.ibb.co.com/9HQ02g2Y/eighteen-div02-img01-popcorn-error.jpg" alt="error" />
            </div>
            <div className='my-auto'>
                <h1 className="text-xl md:text-4xl font-bold text-[#E72726]">Oops! This page took a break for popcorn.</h1>
                <NavLink to={'/'} className='btn text-white font-bold text-sm md:text-2xl mt-10 bg-gradient-to-r from-[#E72726] to-black'>Let's Go Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;