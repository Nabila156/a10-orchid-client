import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center my-20'>
            <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
            <NavLink to={'/'} className='btn text-white font-bold text-2xl mt-10 bg-gradient-to-r from-red-800 to-red-300'>Go Back to Home</NavLink>
        </div>
    );
};

export default ErrorPage;