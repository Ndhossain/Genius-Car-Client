/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../../assets/images/login/login.svg';
import useAuth from '../../../hooks/useAuth';

function Register() {
    const { setLoading, providerLogin, register: registerUser, loading } = useAuth();
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const { from } = location.state || '';
    console.log(from);

    const onSubmit = async (data) => {
        setError(null);
        if (data.password === data.confirm_password) {
            try {
                await registerUser(data.email, data.password, data.name);
                navigate(from);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        } else {
            setError("Password isn't matching.");
        }
    };

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = async () => {
        try {
            await providerLogin(googleProvider);
            navigate('/');
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center gap-10 md:flex-row-reverse min-h-screen items-center">
            <div className="basis-1/2 flex justify-center">
                <img src={loginimg} alt="login" />
            </div>
            <div className="basis-1/2 flex justify-center">
                <div className="card shadow-2xl bg-base-100 md:w-3/4">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-4xl font-semibold text-primary text-center">
                            Register
                        </h1>
                        <div className="form-control">
                            <p className="text-red-500">{errors?.name?.message}</p>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                {...register('name', { required: 'Fill the blank Inputs' })}
                            />
                        </div>
                        <div className="form-control">
                            <p className="text-red-500">{errors?.email?.message}</p>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                {...register('email', { required: 'Fill the blank Inputs' })}
                            />
                        </div>
                        <div className="form-control">
                            <p className="text-red-500">{errors?.email?.message}</p>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                {...register('password', { required: 'Fill the blank Inputs' })}
                            />
                        </div>
                        <div className="form-control">
                            <p className="text-red-500">{errors?.password?.message}</p>
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                {...register('confirm_password', {
                                    required: 'Fill the blank Inputs',
                                })}
                            />
                        </div>
                        <p className="text-red-500">{error && error}</p>
                        <div className="form-control mt-6">
                            <button disabled={loading} type="submit" className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <p className="text-sm">
                            Already have a account,{' '}
                            <Link className="link link-hover" to="/login">
                                Login now
                            </Link>
                            .
                        </p>
                        <button type="button" onClick={googleLogin}>
                            Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
