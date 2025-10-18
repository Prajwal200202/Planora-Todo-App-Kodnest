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

  const updateTask = (idx) => {
    setTasks(prev => prev.map((task, i) => i === idx ? { ...task, completed: !task.completed } : task));
  }

  const deleteTask = (idx) => {
    setTasks(prev => prev.filter((task, i) => i !== idx));
  }

  const clearAllTasks = () => {
    setTasks([]);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  return (
    <div className='max-w-3xl mt-16 border bg-gray-100/80 border-gray-100 shadow-md mx-auto p-7'>
      <header>
        <h1 className='text-4xl font-bold mb-2 text-gray-800/80'>Planora</h1>
        <p className='font-semibold mb-6 text-gray-700/80'>Our Friendly TaskManager</p>
      </header>
      <Taskbar addTask={addTask} />
      <TaskList tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
      <ProgressBar tasks={tasks} />
      {tasks.length > 0 ?
        <button className='bg-red-500 text-white px-6 py-1 rounded text-lg hover:bg-red-700 hover:scale-105'
          onClick={clearAllTasks}
        >Clear All Tasks</button>
        : ''}

    </div>
  )
}

export default App