import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function SocialLogin({ from, setError }) {
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const { setLoading, loading, providerLogin } = useAuth();

    const googleLogin = async () => {
        setError(null);
        try {
            await providerLogin(googleProvider);
            navigate(from);
            toast.success('Successfully Registered');
        } catch (err) {
            setError(err.message);
            setLoading(false);
            console.log(err);
            toast.error('Something went wrong');
        }
    };

    return (
        <button
            className="flex justify-center"
            disabled={loading}
            type="button"
            onClick={googleLogin}
        >
            <FcGoogle size={34} />
        </button>
    );
}

export default SocialLogin;
