/* eslint-disable no-unused-vars */
import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';
import banner5 from '../../../assets/images/banner/5.jpg';
import banner6 from '../../../assets/images/banner/6.jpg';

function Banner() {
    return (
        <div className="relative">
            <div className="w-full absolute flex">
                <div className="flex basis-full grow-0 shrink-0">
                    <img className="sm:h-[600px] h-[400px] w-full" src={banner1} alt="banner" />
                </div>
                <div className="flex basis-full grow-0 shrink-0">
                    <img className="sm:h-[600px] h-[400px] w-full" src={banner2} alt="banner" />
                </div>
                <div className="flex basis-full grow-0 shrink-0">
                    <img className="sm:h-[600px] h-[400px] w-full" src={banner3} alt="banner" />
                </div>
                <div className="flex basis-full grow-0 shrink-0">
                    <img className="sm:h-[600px] h-[400px] w-full" src={banner4} alt="banner" />
                </div>
                <div className="flex basis-full grow-0 shrink-0">
                    <img className="sm:h-[600px] h-[400px] w-full" src={banner5} alt="banner" />
                </div>
                <div className="flex basis-full grow-0 shrink-0">
                    <img className="sm:h-[600px] h-[400px] w-full" src={banner6} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
