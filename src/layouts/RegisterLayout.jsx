
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Register from "../register/Register";


const RegisterLayout = () => {
    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <Helmet>
                <title>Orchid | Register</title>
            </Helmet>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main className="flex-grow">
            <Register></Register>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default RegisterLayout;