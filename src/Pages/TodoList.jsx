import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Form from '../components/Form';
import Todo from '../components/Todo';
import axios from 'axios';

const TodoList = () => {
  const { currentUser, logout } = useAuth();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch todos from backend
  const fetchTodos = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/todos', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    fetchTodos();
  }, [currentUser, navigate]);

  const createTodo = async (title) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/todos', 
        { title },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  if (!currentUser || loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='text-xl'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold text-center mb-6'>Todo List</h1>
        <Form createTodo={createTodo} />
        {todos.map((todo) => (
          <Todo 
            key={todo._id} 
            task={todo} 
            fetchTodos={fetchTodos}
          />
        ))}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate('/profile')}
            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Go to Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;