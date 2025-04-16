import { Helmet } from "react-helmet";
import Testimonials from "../Testimonials";
import Navbar from "../Navbar";
import Footer from "../Footer";

const TestimonialsLayout = () => {
    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <Helmet>
                <title>Orchid | Testimonials</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="flex-grow">
                <Testimonials></Testimonials>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default TestimonialsLayout;