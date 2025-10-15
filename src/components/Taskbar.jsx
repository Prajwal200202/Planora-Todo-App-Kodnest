import React from 'react'

const Taskbar = () => {
  

  return (
    <div className='w-full mb-6'>
      <form className='w-full flex gap-3 flex-col md:flex-row'>
        <div className='relative flex-1 flex items-center justify-center'>
          <input type="text" name="tasks" placeholder='Enter task here...'
            className='px-2 py-2 border w-full border-gray-200 rounded-lg focus:outline-none' />
          <button className='bg-gray-700 absolute right-0 inset-y-0 text-white py-2 px-4 rounded-lg hover:bg-gray-900 hover:scale-105'>Add Task</button>
        </div>
        <div className='flex gap-1'>
          <select name='priority' className='border border-gray-200 rounded-lg focus:outline-none pl-1 max-md:py-2'>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select name='category' className='border border-gray-200 rounded-lg focus:outline-none pl-1'>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Taskbar