
const Footer = () => {
    return (
        <div className='bg-[#7151AC]'>
            <footer className=" text-white md:pl-[45px] footer sm:footer-horizontal p-10">
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">News</a>
                    <a className="link link-hover">Team</a>
                    <a className="link link-hover">Orchid App</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Categories</h6>
                    <div className='flex flex-col md:flex-row md:gap-16'>
                        <div className='flex flex-col leading-[28px]'>
                            <a className="link link-hover">Movies</a>
                            <a className="link link-hover">TV Shows</a>
                            <a className="link link-hover">Comedy</a>
                            <a className="link link-hover">Sci-Fi</a>

                        </div>
                        <div className='flex flex-col leading-[28px]'>
                            <a className="link link-hover">Cartoons</a>
                            <a className="link link-hover">Horror</a>
                            <a className="link link-hover">Other</a>

                        </div>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Get in Touch</h6>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Customer Support</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
            </footer>
            <footer className="  px-12 md:px-[45px] flex flex-col md:flex-row justify-between footer text-white">
                <aside className="flex flex-col md:flex-row">
                    <img className='size-12' src="/assets/movies-app.png" alt="logo" />
                    <div className='flex flex-col'>
                    <p className='font-logo text-orange-700 font-extrabold text-5xl'>ORCHID</p>
                    <p className='text-lg pt-[-3px] text-yellow-500 font-roboto'>Stream. Discover. Enjoy.</p>

                    </div>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://x.com/' target='_blank'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href='https://www.youtube.com/' target='_blank'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/' target='_blank'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;