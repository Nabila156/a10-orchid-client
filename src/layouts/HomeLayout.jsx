import Navbar from "../Navbar";

const HomeLayout = () => {
    return (
        <div className="font-roboto min-w-screen min-h-screen flex flex-col">
            <nav className="mx-8">
                <Navbar></Navbar>
            </nav>
            <main className="flex-grow">

            </main>
            <footer>

            </footer>
        </div>
    );
};

export default HomeLayout;