import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { RxEyeOpen } from "react-icons/rx";
import { GoEyeClosed } from "react-icons/go";
import { toast, Toaster } from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    const finalPhotoURL = photoURL || "https://i.ibb.co/4pDNDk1/avatar.png";

    // Password validation
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordReg.test(password)) {
      toast.error("Password must be at least 6 characters, include uppercase and lowercase letters.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL: finalPhotoURL })
          .then(() => {
            toast.success("Signup successful!");
            navigate("/"); // redirect to home
          })
          .catch(err => console.error(err));
      })
      .catch(err => toast.error(err.message));
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Signup with Google!");
        navigate("/");
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-pink-50">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">Signup Now!</h1>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            className="input w-full border px-3 py-2 rounded-md bg-pink-100 placeholder-pink-500"
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="input w-full border px-3 py-2 rounded-md bg-pink-100 placeholder-pink-500"
            required
          />
          <input
            type="text"
            value={photoURL}
            onChange={e => setPhotoURL(e.target.value)}
            placeholder="Photo URL (optional)"
            className="input w-full border px-3 py-2 rounded-md bg-pink-100 placeholder-pink-500"
          />
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="input w-full border px-3 py-2 rounded-md bg-pink-100 placeholder-pink-500"
              required
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-2.5 cursor-pointer text-xl text-gray-700"
            >
              {show ? <RxEyeOpen /> : <GoEyeClosed />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-500 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 underline">
            Login
          </Link>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-pink-200" />
          <span className="mx-2 text-pink-400">OR</span>
          <hr className="flex-grow border-pink-200" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-pink-50 text-gray-800 px-5 py-2 rounded-lg font-semibold hover:bg-pink-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
