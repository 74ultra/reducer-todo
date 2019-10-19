import React from 'react';

const TaskList = ({ todoList, toggleTask }) => {
    
    return (
        <div>
            {todoList.map(task => {
                return <div key={task.id} 
                            onClick={() => toggleTask(task.id)}
                            className={ task.completed === true ? 'completed-task' : '' }
                            >{task.item}</div>
            })}
        </div>
    )
}

export default TaskList;