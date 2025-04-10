import AddMovie from "../AddMovie/AddMovie";
import Footer from "../Footer";
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
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddMovieLayout;