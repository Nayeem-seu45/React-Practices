import React from 'react'
import Task from './Task'
export const Tasks = ({tasks, onDelete, onTaggle}) => {
    return (
        <>
            {tasks.map((task, index) =>(
              <Task key={index}
               task= {task}
               onDelete = {onDelete}
               onTaggle = {onTaggle}

              
               />
            ))}
        </>
    )
}

export default Tasks

