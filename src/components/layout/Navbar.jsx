/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import useAuth from '../../hooks/useAuth';

function Navbar() {
    const { currentUser, logout, loading } = useAuth();
    return (
        <div data-theme="light">
            <div className="navbar bg-base-100 container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {!loading &&
                        (currentUser && currentUser.uid ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    {currentUser.photoURL ? (
                                        <div className="w-10 rounded-full">
                                            <img
                                                src={currentUser.photoURL}
                                                alt={currentUser.displayName}
                                            />
                                        </div>
                                    ) : (
                                        <FaUser size={22} />
                                    )}
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 border"
                                >
                                    <li>
                                        <button type="button" onClick={() => logout()}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-ghost btn-circle avatar">
                                <FaUserPlus size={22} />
                            </Link>
                        ))}
                    <Link to="/" className="btn btn-outline btn-primary">
                        Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
