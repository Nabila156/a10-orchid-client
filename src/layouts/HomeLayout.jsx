import Banner from "../Banner";
import Navbar from "../Navbar";

const HomeLayout = () => {
    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="flex-grow">
                <Banner></Banner>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;