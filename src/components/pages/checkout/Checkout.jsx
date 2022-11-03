/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

function Checkout() {
    const service = useLoaderData();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(service);
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="p-10 bg-slate-100 my-10">
            <p className="text-red-400">{errors}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Type your name"
                        className="input input-bordered w-full"
                        {...register('name', { required: 'Enter the information properly' })}
                    />
                    <input
                        type="email"
                        placeholder="Type your email"
                        className="input input-bordered w-full"
                        {...register('email', { required: 'Enter the information properly' })}
                    />
                    <input
                        type="text"
                        placeholder="Type your phone no."
                        className="input input-bordered w-full"
                        {...register('phoneNo', { required: 'Enter the information properly' })}
                    />
                    <input
                        type="text"
                        placeholder="Type service"
                        className="input input-bordered w-full"
                        {...register('service', { required: 'Enter the information properly' })}
                    />
                </div>
                <textarea
                    className="textarea textarea-bordered h-24 w-full mt-4"
                    placeholder="Type your message"
                    {...register('message', { required: 'Enter the information properly' })}
                />
            </form>
        </div>
    );
}

export default Checkout;
