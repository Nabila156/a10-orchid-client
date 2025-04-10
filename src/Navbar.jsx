import { useTheme } from "next-themes";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdWbTwilight } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { FaBars } from "react-icons/fa";


const Navbar = () => {

    const { theme, setTheme } = useTheme();
    const { user, userLogOut } = useContext(AuthContext);
    // console.log(user)

    const links = <>

        <NavLink to={'/'} className={({ isActive }) => `font-bold text-xl lg:text-lg mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 border-2 p-1 rounded border-orange-700' : 'text-black'}`}>Home</NavLink>
        <NavLink to={'/allMovies'} className={({ isActive }) => `font-bold text-xl lg:text-lg mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 border-2  p-1 rounded border-orange-700' : 'text-black'}`}>All Movies</NavLink>
        <NavLink to={'/addMovie'} className={({ isActive }) => `font-bold text-xl lg:text-lg mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 border-2 p-1 rounded border-orange-700' : 'text-black'}`}>Add Movie</NavLink>
        <NavLink to={'/myFavourite'} className={({ isActive }) => `font-bold text-xl lg:text-lg mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700  border-2 border-orange-700 p-1 rounded' : 'text-black'}`}>My Favourites</NavLink>

        {
            user && user?.email ?
                "" : <NavLink to={'/register'} className={({ isActive }) => `font-bold text-xl lg:text-lg mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 border-2  p-1 rounded  border-b border-orange-700' : 'text-black'}`}>Register</NavLink>


        }

        {
            user && user?.email ?
                "" : <NavLink to={'/login'} className={({ isActive }) => `font-bold text-xl lg:text-lg mt-1 lg:mt-0 hover:scale-125 transform transition duration-300 ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 border-2  p-1 rounded  border-b border-orange-700' : 'text-black'}`}>Login</NavLink>
       

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
                        user?.photoURL ? <img className="h-14 w-14 rounded-full" src={user?.photoURL} alt="user" /> : ""
                    }
                    <p className={`${theme === "dark" ? "text-purple-300" : "text-purple-700"} font-bold font-hand_writing text-xl opacity-0 group-hover:opacity-100 text-center`}>{user?.displayName?.split(' ')[0]}</p>
                    <NavLink onClick={userLogOut} className="font-bold text-xl lg:text-lg opacity-0 group-hover:opacity-100 hover:scale-125 transform transition duration-300">Logout</NavLink>
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