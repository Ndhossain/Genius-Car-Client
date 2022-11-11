/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function Checkout() {
    const service = useLoaderData();
    const { _id, price, title } = service;
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            customarName: currentUser?.displayName || '',
            email: currentUser?.email || '',
            phoneNo: currentUser?.phoneNumber || '',
            service: title,
            message: '',
        },
    });

    const onSubmit = (data) => {
        const order = {
            ...data,
            service: _id,
            serviceName: title,
            uid: currentUser.uid,
        };
        console.log(order);
        axios({
            method: 'POST',
            data: order,
            url: 'https://genius-car-server-ndhossain.vercel.app/orders',
        }).then((res) => {
            if (res?.data?.acknowledged) {
                toast.success('data added successfully');
                navigate('/orders');
            }
        });
    };

    return (
        <div className="p-5 sm:p-10 bg-slate-100 my-10 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-red-400">{errors?.customarName?.message}</p>
                        <input
                            type="text"
                            placeholder="Type your name"
                            className="input input-bordered w-full"
                            {...register('customarName', {
                                required: 'Enter the information properly',
                            })}
                        />
                    </div>
                    <div>
                        <p className="text-red-400">{errors?.email?.message}</p>
                        <input
                            type="email"
                            placeholder="Type your email"
                            className="input input-bordered w-full"
                            {...register('email', {
                                required: 'Enter the information properly',
                            })}
                        />
                    </div>
                    <div>
                        <p className="text-red-400">{errors?.phoneNo?.message}</p>
                        <input
                            type="text"
                            placeholder="Type your phone no."
                            className="input input-bordered w-full"
                            {...register('phoneNo', {
                                required: 'Enter the information properly',
                            })}
                        />
                    </div>
                    <div>
                        <p className="text-red-400">{errors?.service?.message}</p>
                        <input
                            type="text"
                            placeholder="Type service"
                            className="input input-bordered w-full"
                            {...register('service', {
                                required: 'Enter the information properly',
                            })}
                        />
                    </div>
                </div>
                <div>
                    <p className="text-red-400">{errors?.message?.message}</p>
                    <textarea
                        className="textarea textarea-bordered h-24 w-full mt-4"
                        placeholder="Type your message"
                        {...register('message', { required: 'Enter the information properly' })}
                    />
                </div>
                <p className="text-primary text-center mt-4 font-semibold">Total Price: ${price}</p>
                <button type="submit" className="btn btn-primary mt-4 w-full">
                    Confirm Checkout
                </button>
            </form>
        </div>
    );
}

export default Checkout;
