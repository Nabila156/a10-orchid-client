import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>

        <NavLink to={'/'} className={({ isActive }) => `font-bold ${isActive ? 'text-purple-700 text-lg border-b border-orange-200' : 'text-black text-sm'}`}>Home</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-purple-700 text-lg border-b border-orange-200' : 'text-black text-sm'}`}>All Movies</NavLink>
        <NavLink to={'/addMovie'} className={({ isActive }) => `font-bold ${isActive ? 'text-purple-700 text-lg border-b border-orange-200' : 'text-black text-sm'}`}>Add Movie</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-purple-700 text-lg border-b border-orange-200' : 'text-black text-sm'}`}>My Favourites</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-purple-700 text-lg border-b border-orange-200' : 'text-black text-sm'}`}>Register</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-8 pt-8">
            <div className="flex-1">
                <div className="flex items-center">
                    <img className="size-12" src="/assets/movies-app.png" alt="logo" />
                    <a className="btn btn-ghost font-logo text-orange-700 font-extrabold text-5xl">ORCHID</a>
                </div>
            </div>
            <div className="flex">
                <div>
                    <ul className="hidden md:flex items-center gap-5">
                        {links}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="block md:hidden btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="user"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;