import React from 'react';

function BannerItem({ image }) {
    return (
        <div className="flex basis-full grow-0 shrink-0 duration-300 relative">
            <div className="img-gradient w-full">
                <img className="sm:h-[600px] h-[400px] w-full" src={image} alt="banner" />
            </div>
            <div className="absolute mt-5 sm:mt-0 text-white bottom-0 top-0 sm:top-0 sm:bottom-1/2 translate-y-0 sm:translate-y-1/2 flex flex-col gap-5 left-5 sm:left-10">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Affordable <br /> Price For Car <br /> servicing
                </h1>
                <p>
                    There are many variations of passages of available, <br /> but the majority have
                    suffered alteration in some form
                </p>
                <div className="flex gap-2 sm:gap-5">
                    <button type="button" className="btn btn-primary">
                        Discover More
                    </button>
                    <button
                        data-theme="black"
                        type="button"
                        className="btn btn-outline btn-light rounded-lg capitalize"
                    >
                        Latest Project
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BannerItem;
