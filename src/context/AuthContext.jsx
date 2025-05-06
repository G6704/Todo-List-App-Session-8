// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage for token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        setCurrentUser(res.data.user);
      })
      .catch(() => {
        localStorage.removeItem('token');
      });
    }
    setLoading(false);
  }, []);

  const login = (token, user) => {
    localStorage.setItem('token', token);
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
