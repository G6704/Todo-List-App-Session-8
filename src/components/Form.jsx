import React, { useState } from 'react'

const Form = ({createTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        createTodo(value);
        setValue('')
    }

  return (
      <form className='w-full mb-6' onSubmit={handleSubmit}>
        <div className='flex'>
        <input 
          type="text" 
          className='outline-none bg-transparent border border-gray-300 p-2 w-full text-gray-700 rounded-l placeholder:text-gray-400' 
          placeholder='What task do you have today?' 
          onChange={(e) => setValue(e.target.value)} 
          value={value}
        />
        <button className='bg-blue-500 border-none p-2 text-white cursor-pointer rounded-r'>
          Add Task
        </button>
      </div>
    </form>
  )
}

export default Form
