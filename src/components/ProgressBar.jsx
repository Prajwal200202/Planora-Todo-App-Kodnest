import { useEffect, useState } from 'react'

const ProgressBar = ({ tasks }) => {

  const todo = tasks.filter(task => task.completed).length;
  const progress = todo / tasks.length * 100;


  return (
    <div className='mb-4'>
      {tasks.length > 0 ?
        <div>
          <div className="w-full bg-gray-200 rounded mb-2">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className='text-lg text-gray-600 text-center'>{todo} out of {tasks.length} completed</div>
        </div>
        : <div className='text-gray-600 text-xl text-center'> No Tasks Added...
        </div>}
    </div>
  )
}

export default ProgressBar