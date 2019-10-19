import React, { useReducer } from 'react';

import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';

import './App.css';
import { initialState, reducer } from './reducers';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addTask = task => {
    dispatch({ type: "ADD_TASK", payload: task});
  }

  const toggleTask = id => {
    dispatch({ type: "TOGGLE_TASK", payload: id })
  }

  const clearCompleted = () => {
    console.log('clear completed')
    dispatch({ type: "CLEAR_COMPLETED"})
  }
  
  return (
    <div className="App">
      <div>
        <h1>Task List</h1>
      </div>
      <TaskForm addTask={addTask} clearCompleted={clearCompleted} />
      <div>
        <TaskList todoList={state.todoList} toggleTask={toggleTask} />
      </div>
    </div>
  );
}

export default App;
