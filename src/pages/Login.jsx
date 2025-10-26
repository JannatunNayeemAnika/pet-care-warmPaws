import { sendPasswordResetEmail, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) navigate(from, { replace: true });
  }, [user, from, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Login successful!');
        navigate(from, { replace: true });
      })
      .catch(error => toast.error(error.message));
  };

  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(res => {
        setUser(res.user);
        toast.success("Google login successful");
        navigate(from, { replace: true });
      })
      .catch(err => toast.error(err.message));
  };

  const handleResetPassword = () => {
    if (!email) return toast.error("Please enter your email first");
    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Password reset email sent!"))
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-pink-50 px-4 pt-24 sm:pt-32">
      <div className="w-full max-w-md">
        <h1 className='text-center font-bold text-3xl mb-6 text-pink-600'>Login now!</h1>
        <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8">
          {user ? (
            <p className="text-center text-green-600 font-semibold">User already logged in</p>
          ) : (
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-pink-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input border bg-pink-100 text-black w-full placeholder-pink-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1 relative">
                <label className="font-semibold text-pink-600">Password</label>
                <input
                  type={show ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input bg-pink-100 text-black w-full pr-12 placeholder-pink-500"
                  required
                />
                <span
                  onClick={() => setShow(!show)}
                  className='absolute right-3 top-10 cursor-pointer text-gray-700'
                >
                  {show ? <RxEyeOpen size={20} /> : <GoEyeClosed size={20} />}
                </span>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="text-pink-500 text-sm hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-neutral mt-4 border-none bg-pink-400 w-full hover:bg-pink-500 text-white"
              >
                Login
              </button>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="mt-5 flex items-center justify-center gap-3 bg-pink-50 text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-pink-100 transition-colors"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="text-center mt-2">
                Don't have an account? <Link to='/signup' className='text-pink-500 underline'>Signup</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
