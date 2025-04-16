
import { Helmet } from 'react-helmet';
import Footer from '../Footer';
import Navbar from '../Navbar';
import FavouriteMovies from '../movies/FavouriteMovies';

const MyFavouriteLayout = () => {
    return (
        <div className="font-roboto min-h-screen flex flex-col">
            <Helmet>
                <title>Orchid | My Favourite</title>
            </Helmet>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main className="flex-grow">
            <FavouriteMovies></FavouriteMovies>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default MyFavouriteLayout;