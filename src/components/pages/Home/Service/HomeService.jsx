import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceContainer from './ServiceContainer';

function HomeService() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://genius-car-server-ndhossain.vercel.app/services',
        }).then((res) => {
            setServices(res.data);
        });
    }, []);
    return (
        <div className="my-10">
            <h4 className="text-primary font-semibold text-center">Service</h4>
            <h2 className="text-4xl font-semibold text-center my-3">Our Services</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center mt-5">
                {services.map((service) => (
                    <ServiceContainer key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default HomeService;
