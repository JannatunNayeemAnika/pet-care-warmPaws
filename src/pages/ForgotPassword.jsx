import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast, Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
      setEmail("");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-semibold text-center mb-5 text-pink-600">Reset Password</h2>
      <form onSubmit={handleReset} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full bg-pink-100 text-black placeholder-pink-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`btn btn-neutral w-full bg-pink-400 text-white border-none hover:bg-pink-500 transition`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
