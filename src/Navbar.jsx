import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <NavLink to={'/'}>
        <div className="flex items-center size-14">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
            Home
        </div>
        </NavLink>
        <NavLink>All Movies</NavLink>
        <NavLink>Add Movie</NavLink>
        <NavLink>My Favourites</NavLink>
        <NavLink>Register</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <div className="flex">
                    <img className="size-8" src="/assets/movies-app.png" alt="logo" />
                    <a className="btn btn-ghost font-logo font-extrabold text-2xl">ORCHID</a>
                </div>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div>
                        <ul className="hidden md:flex items-center gap-5 font-bold text-sm">
                            {links}
                        </ul>
                    </div>
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