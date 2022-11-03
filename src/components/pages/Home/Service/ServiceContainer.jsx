import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ServiceContainer({ service }) {
    const { _id, img, price, title } = service;

    return (
        <div className="card border bg-base-100 shadow-xl flex flex-col justify-between">
            <figure className="px-10 pt-10">
                <img src={img} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body gap-3">
                <h2 className="card-title text-left">{title}</h2>
                <div className="card-actions justify-between w-full">
                    <p className="font-semibold text-primary text-left">Price: {price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <AiOutlineArrowRight color="#FF3811" size={24} fontWeight="bold" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceContainer;
