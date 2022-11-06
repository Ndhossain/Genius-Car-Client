/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../../assets/images/login/login.svg';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../../common/SocialLogin';

function Login() {
    const { setLoading, loading, login } = useAuth();
    const [error, setError] = useState(null);
    const location = useLocation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '';

    const onSubmit = async (data, e) => {
        e.preventDefault();
        setError(null);
        try {
            const userData = await login(data.email, data.password);
            const res = await fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ uid: userData?.user?.uid }),
            });
            const jwtData = await res.json();
            console.log(jwtData);
            localStorage.setItem('gen-token', jwtData.token);
            navigate(from, { replace: true });
            toast.success('Successfully Logged In');
            reset();
        } catch (err) {
            console.error(err);
            setError(err.message);
            setLoading(false);
            toast.error('Something went wrong');
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
                                <button type="button" className="label-text-alt link link-hover">
                                    Forgot password?
                                </button>
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
                            <Link
                                className="link link-hover text-primary font-medium"
                                to="/register"
                                state={{ from }}
                            >
                                Register now
                            </Link>
                            .
                        </p>
                        <div className="divider">OR</div>
                        <SocialLogin from={from} setError={setError} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
