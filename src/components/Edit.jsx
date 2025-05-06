import React, { useState } from 'react'

const Edit = ({editTodo, task}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue('')
    }

  return (
    <form className='w-full mb-4' onSubmit={handleSubmit}>
        <div className='flex'>
          <input 
          type="text" 
          className='outline-none bg-transparent border border-gray-300 p-2 w-full text-gray-700 rounded-l placeholder:text-gray-400' 
          placeholder='Update Task'
          onChange={(e) => setValue(e.target.value)} value={value} 
        />
        <button className='bg-green-500 border-none p-2 text-white cursor-pointer rounded-r'>
          Update Task
        </button>
      </div>
    </form>
  )
}

export default Edit