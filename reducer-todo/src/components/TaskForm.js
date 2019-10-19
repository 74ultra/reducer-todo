import React, { useState } from 'react';

const TaskForm = ({ addTask, clearCompleted }) => {

    const [task, setTask] = useState('');
    
    const handleChange = event => {
        setTask(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        addTask(task);
        setTask('');
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' 
                   name='task'
                   placeholder='task'
                   value={task}
                   onChange={handleChange}
            />
            <button type='submit'>Add new task</button>
            <button onClick={clearCompleted}>Clear completed tasks</button>
        </form>
    )
}

export default TaskForm;