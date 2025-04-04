import { useTheme } from "next-themes";
import { NavLink } from "react-router-dom";
import { MdDarkMode, MdWbTwilight } from "react-icons/md";


const Navbar = () => {

    const { theme, setTheme } = useTheme();

    const links = <>

        <NavLink to={'/'} className={({ isActive }) => `font-bold ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>Home</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>All Movies</NavLink>
        <NavLink to={'/addMovie'} className={({ isActive }) => `font-bold ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>Add Movie</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>My Favourites</NavLink>
        <NavLink to={'/register'} className={({ isActive }) => `font-bold ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>Register</NavLink>
        <NavLink to={'/login'} className={({ isActive }) => `font-bold ${theme === "dark" ? "text-white" : ""} ${isActive ? 'text-purple-700 text-xl lg:text-lg border-b border-orange-400' : 'text-black text-xl lg:text-sm'}`}>Login</NavLink>
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? <MdWbTwilight className="mx-auto text-5xl lg:text-3xl"/> : <MdDarkMode className="mx-auto text-4xl lg:text-2xl"/>}
        </button>
    </>

    return (
        <div className={`lg:sticky top-0 z-50 ${theme === 'dark' ? 'dark' : ''} navbar bg-base-100 shadow-sm px-8 pt-8`}>
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
                    <div tabIndex={0} role="button" className="block lg:hidden btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="user"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
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