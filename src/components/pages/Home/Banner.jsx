/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';
import banner5 from '../../../assets/images/banner/5.jpg';
import banner6 from '../../../assets/images/banner/6.jpg';
import BannerItem from '../../common/BannerItem';
import './BannerImageOverlay.css';

function Banner() {
    const [carrousel, setCarrousel] = useState(0);
    const rightClick = () => {
        if (carrousel > -500) {
            setCarrousel((prev) => prev - 100);
        }
    };
    const leftClick = () => {
        if (carrousel < 0) {
            setCarrousel((prev) => prev + 100);
        }
    };
    return (
        <div className="relative rounded-xl overflow-hidden w-full sm:h-[600px] h-[400px] mt-5">
            <div style={{ left: `${carrousel}%` }} className="w-full absolute flex duration-300">
                <BannerItem image={banner1} />
                <BannerItem image={banner2} />
                <BannerItem image={banner3} />
                <BannerItem image={banner4} />
                <BannerItem image={banner5} />
                <BannerItem image={banner6} />
            </div>
            <div className="absolute bottom-5 right-5 flex gap-5">
                <button
                    type="button"
                    onClick={leftClick}
                    className={`btn btn-circle ${carrousel === 0 ? '' : 'btn-primary'}`}
                >
                    <AiOutlineArrowLeft size={20} color="white" />
                </button>
                <button
                    type="button"
                    onClick={rightClick}
                    className={`btn btn-circle ${carrousel === -500 ? '' : 'btn-primary'}`}
                >
                    <AiOutlineArrowRight size={20} color="white" />
                </button>
            </div>
        </div>
    );
}

export default Banner;
