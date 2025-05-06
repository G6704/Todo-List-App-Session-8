import React, { useState } from 'react';
import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';

const Todo = ({ task, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/todos/${task._id}`,
        {
          title: editedTask,
          completed: task.completed
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setIsEditing(false);
      fetchTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const toggleComplete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/api/todos/${task._id}`,
        {
          title: task.title,
          completed: !task.completed
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      fetchTodos();
    } catch (error) {
      console.error('Error toggling complete:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(
        `http://localhost:5000/api/todos/${task._id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className={`flex justify-between items-center bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded-md mb-2 w-full shadow-sm ${task.completed ? 'opacity-70' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          onBlur={handleUpdate}
          onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
          className="font-primary flex-grow mr-2 px-2 py-1 border rounded"
          autoFocus
        />
      ) : (
        <p 
          className={`font-primary flex-grow ${task.completed ? 'line-through text-gray-400' : ''}`}
          onClick={toggleComplete}
        >
          {task.title}
        </p>
      )}

      <div className='flex items-center gap-x-4'>
        {isEditing ? (
          <AiFillCheckCircle 
            className='text-xl cursor-pointer text-green-500' 
            onClick={handleUpdate}
          />
        ) : (
          <AiFillEdit 
            className='text-xl cursor-pointer text-blue-500' 
            onClick={() => setIsEditing(true)}
          />
        )}
        <BsFillTrashFill 
          className='text-xl cursor-pointer text-red-500' 
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Todo;
