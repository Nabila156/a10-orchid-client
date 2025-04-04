import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="mt-5 carousel md:h-[400px] w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/JFs5brFq/CB-BACKGROUND-1-1024x512.png"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/qF0JDdmC/1m9r-Pu-Tz0-Qr2-Rozc6-PD8sg.jpg"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/G4fvyCmy/Euphoria.jpg"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/1t9tM5px/8-Blue-and-Orange-Movie-Posters.jpg"
                        className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img
                        src="https://i.ibb.co.com/jjNMwFY/239813-thumb-665.jpg"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Banner;