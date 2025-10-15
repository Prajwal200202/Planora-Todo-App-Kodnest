import ProgressBar from './components/ProgressBar'
import Taskbar from './components/Taskbar'
import TaskList from './components/TaskList'
import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (Task) => {
    setTasks([...tasks, Task]);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Eff Running');
  });

  return (
    <div className='max-w-3xl mt-16 border border-gray-100 shadow-md mx-auto p-7'>
      <h1 className='text-4xl font-bold mb-2 text-gray-800/90'>Planora</h1>
      <p className='font-semibold mb-6 text-gray-700/80'>Our Friendly TaskManager</p>
      <Taskbar addTask={addTask} />
      <TaskList />
      <ProgressBar />
      {tasks.length > 0 ?
        <button className='bg-red-500 text-white px-6 py-1 rounded text-lg hover:bg-red-700 hover:scale-105'>Clear All Tasks</button>
        : ''}

    </div>
  )
}

export default App