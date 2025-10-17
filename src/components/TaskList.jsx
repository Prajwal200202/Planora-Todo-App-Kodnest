import React from 'react'

const TaskList = ({ tasks, updateTask, deleteTask }) => {

  return (
    <ul className='space-y-3 mb-6'>
      {tasks.map((task, idx) => (
        <div key={idx} className='flex justify-between border border-gray-200/60 shadow-xs px-3 py-2 rounded-md'>
          <li className={task.completed ? 'line-through text-gray-700/70' : ''}
          >{task.text} <small>({task.priority}, {task.category})</small> </li>
          <div className='flex gap-6'>
            <button className='text-sm text-green-600 cursor-pointer'
            onClick={()=>updateTask(idx)}
            >{task.completed ? 'Undo':'Complete'}</button>
            <button className='text-sm text-green-600 cursor-pointer'
            onClick={()=>deleteTask(idx)}
            >Delete</button>
          </div>
        </div>
      ))}
    </ul>
  )
}

export default TaskList