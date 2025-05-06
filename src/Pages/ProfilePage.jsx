import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        {/* Profile Picture (Ill make more dynamic later)*/}
        <img
          src="src\assets\GalihAditama.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />

        {/* Profile Name */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Galih Putra Aditama</h1>

        {/* Short Bio */}
        <p className="text-gray-600 mb-6">
          Hi, This is my To Do List app with the User Authentication feature. I would love to make it more dynamic later.
        </p>

        {/* Email (from Firebase Authentication) */}
        <p className="text-gray-600 mb-6">
          Email: {currentUser?.email}
        </p>

        {/* Back to Todo List Button */}
        <button
          onClick={() => navigate('/todo')}
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Todo List
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;