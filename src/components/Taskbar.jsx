import { useState } from 'react'

const Taskbar = ({ addTask }) => {
  const [Task, setTask] = useState({
    text: '',
    priority: 'Low',
    category: 'General',
    completed: false,
  })

  const handleForm = (e) => {
    e.preventDefault();

    if(Task.text === ''){
      alert('Please Enter some task.');
      return;
    }
    addTask(Task);

    setTask({
      text: '',
      priority: 'Low',
      category: 'General',
      completed: false,
    });
  }

  return (
    <div className='w-full mb-6'>
      <form
        className='w-full flex gap-3 flex-col md:flex-row'
        onSubmit={handleForm}
      >
        <div className='relative flex-1 flex items-center justify-center'>
          <input type="text"
            name="text"
            value={Task.text}
            placeholder='Enter task here...'
            className='px-2 py-2 border w-full text-gray-600 border-gray-200 rounded-lg focus:outline-none'
            onChange={(e) => setTask({ ...Task, [e.target.name]: e.target.value })}
          />
          <button className='bg-gray-700 absolute right-0 inset-y-0 text-white py-2 px-4 rounded-lg hover:bg-gray-900 hover:scale-105'>Add Task</button>
        </div>
        <div className='flex gap-2 font-medium text-gray-600/80'>
          <select name='priority'
            className='border border-gray-200 rounded-lg focus:outline-none pl-1 max-md:py-2'
            value={Task.priority}
            onChange={(e) => setTask({ ...Task, [e.target.name]: e.target.value })}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select name='category'
            className='border border-gray-200 rounded-lg focus:outline-none pl-1'
            value={Task.category}
            onChange={(e) => setTask({ ...Task, [e.target.name]: e.target.value })}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Taskbar