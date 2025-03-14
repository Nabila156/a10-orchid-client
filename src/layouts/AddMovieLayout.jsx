import AddMovie from "../AddMovie/AddMovie";
import Navbar from "../Navbar";


const AddMovieLayout = () => {
    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="flex-grow">
                <AddMovie></AddMovie>
            </main>
        </div>
    );
};

export default AddMovieLayout;