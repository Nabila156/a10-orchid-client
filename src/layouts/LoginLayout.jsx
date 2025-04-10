import Footer from "../Footer";
import Login from "../login/login";
import Navbar from "../Navbar";

const LoginLayout = () => {
    return (
        <div className="font-roboto min-h-screen flex flex-col">
        <nav>
            <Navbar></Navbar>
        </nav>
        <main className="flex-grow">
            <Login></Login>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default LoginLayout;