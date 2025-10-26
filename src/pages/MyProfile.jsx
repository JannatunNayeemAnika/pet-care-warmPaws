import React, { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import MyContainer from "../components/MyContainer";

const MyProfile = () => {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("No user is logged in!");
      return;
    }

    if (!displayName.trim()) {
      toast.error("Display name cannot be empty");
      return;
    }

    try {
      await updateProfile(user, { displayName, photoURL });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile!");
      console.error(error);
    }
  };

  return (
    <MyContainer>
      <div className="max-w-md mx-auto mt-10 mb-20 p-6 bg-pink-50 shadow-md rounded-lg text-center">
        <Toaster position="top-center" />
        <h1 className="text-3xl font-bold mb-6 text-pink-600">My Profile</h1>

        {/* Profile Image */}
        <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 flex items-center justify-center bg-gray-200">
          {photoURL ? (
            <img
              src={photoURL}
              alt={displayName || "User"}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-3xl font-bold text-gray-400">
              {displayName ? displayName[0].toUpperCase() : "U"}
            </span>
          )}
        </div>

        {/* Display Name */}
        {!isEditing && (
          <>
            {displayName && <h2 className="text-xl font-semibold mb-2">{displayName}</h2>}
            <p className="text-gray-600 mb-6">{user?.email || "No Email"}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-pink-400 text-white rounded-md hover:bg-pink-500 transition duration-300"
            >
              Update Profile
            </button>
          </>
        )}

        {/* Edit Form */}
        {isEditing && (
          <form onSubmit={handleUpdateProfile} className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Enter new name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Enter new photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <div className="flex justify-center space-x-3">
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </MyContainer>
  );
};

export default MyProfile;
