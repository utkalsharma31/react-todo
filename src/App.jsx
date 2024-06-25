import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>React To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
