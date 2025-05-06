import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white mb-8">Welcome to my Todo App</h1>
      <button
        onClick={() => navigate('/login')}
        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
      >
        Go to Login
      </button>
    </div>
  );
};

export default LandingPage;