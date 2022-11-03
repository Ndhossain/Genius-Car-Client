/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import loginimg from '../../../assets/images/login/login.svg';
import useAuth from '../../../hooks/useAuth';

function Login() {
    const { setLoading, loading, providerLogin, login } = useAuth();
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setError(null);
        try {
            await login(data.email, data.password);
            navigate('/');
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = async () => {
        setError(null);
        try {
            await providerLogin(googleProvider);
            navigate('/');
        } catch (err) {
            setError(err.message);
            setLoading(false);
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col justify-center gap-10 md:flex-row min-h-screen items-center">
            <div className="basis-1/2 flex justify-center">
                <img src={loginimg} alt="login" />
            </div>
            <div className="basis-1/2 flex justify-center">
                <div className="card shadow-2xl bg-base-100 md:w-3/4">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-4xl font-semibold text-primary text-center">Log in</h1>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <p className="text-red-500">{error && error}</p>
                        <div className="form-control mt-6">
                            <button disabled={loading} type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p className="text-sm">
                            Don&apos;t have a account,{' '}
                            <Link className="link link-hover" to="/register">
                                Register now
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

export default Login;
