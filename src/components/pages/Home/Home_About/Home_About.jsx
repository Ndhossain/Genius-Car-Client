import React from 'react';
import about2 from '../../../../assets/images/about_us/parts.jpg';
import about1 from '../../../../assets/images/about_us/person.jpg';

function AboutHome() {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-5">
                <div className="relative lg:w-1/2">
                    <img src={about1} alt="About" className="w-3/4 rounded-lg shadow-2xl " />
                    <img
                        src={about2}
                        alt="About"
                        className="w-2/4 border-[10px] border-white rounded-lg shadow-2xl absolute top-1/2 left-2/4 tr p-0"
                    />
                </div>
                <div className="lg:w-1/2 mt-5 lg:mt-0">
                    <h4 className="text-primary font-semibold">About</h4>
                    <h1 className="text-4xl font-semibold my-3">
                        We are qualified & of experience in this field
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button type="button" className="btn btn-primary">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutHome;
