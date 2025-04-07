import { useTheme } from "next-themes";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdWbTwilight } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { FaBars, FaRegUser } from "react-icons/fa";


const Navbar = () => {

    const { theme, setTheme } = useTheme();
    const { user, userLogOut } = useContext(AuthContext);
    console.log(user)

    const links = <>

        <NavLink to={'/'} className={({ isActive }) => `font-bold mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>Home</NavLink>
        <NavLink to={'/allMovies'} className={({ isActive }) => `font-bold mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>All Movies</NavLink>
        <NavLink to={'/addMovie'} className={({ isActive }) => `font-bold mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>Add Movie</NavLink>
        <NavLink className={({ isActive }) => `font-bold mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>My Favourites</NavLink>
        <NavLink to={'/register'} className={({ isActive }) => `font-bold mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>Register</NavLink>
        {
            user && user?.email ? <NavLink onClick={userLogOut} className={({ isActive }) => `font-bold mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}  ${theme === "dark" ? "text-white" : ""} }`}>Logout</NavLink>
                : <NavLink to={'/login'} className={({ isActive }) => `font-bold mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}  ${theme === "dark" ? "text-white" : ""} }`}>Login</NavLink>

        }

        <button className=" hover:scale-125 transform transition duration-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <MdWbTwilight className="mx-auto text-5xl lg:text-3xl" /> : <MdDarkMode className="mx-auto text-4xl lg:text-2xl" />}
        </button>

        {
            user && user?.email ?
                <div className="mx-auto group">
                    {
                        user?.photoURL ? <img className="h-20 w-20 rounded-full" src={user?.photoURL} alt="user" />
                            : <FaRegUser className='size-6' />
                    }
                    <p className='font-bold font-gummy text-xl opacity-0 group-hover:opacity-100 text-center'>{user?.displayName?.split(' ')[0]}</p>
                </div>
                : ''

        }
    </>

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} navbar bg-base-100 shadow-sm px-8 pt-8`}>
            <div className="flex-1">
                <div className="flex gap-2 items-center">
                    <img className="size-12" src="/assets/movies-app.png" alt="logo" />
                    <p className="font-logo text-orange-700 font-extrabold text-5xl">ORCHID</p>
                </div>
            </div>

            <div className="flex">
                <div>
                    <ul className="hidden lg:flex items-center gap-5">
                        {links}

                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="block lg:hidden btn btn-ghost">
                        <FaBars className="size-6" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm text-center dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;