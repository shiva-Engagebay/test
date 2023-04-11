import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoAddItems() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };


  const handleToggle = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
      

  const handleToggleAll = (e) => {
    const allCompleted = todos.every((todo) => todo.completed);
    setTodos(todos.map((todo) => ({ ...todo, completed: !allCompleted })));
  };


  const handleClearCompleted = () => {
    const filteredTodos = todos.filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };


  return (
    <div className="App">
      <h2>Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} handleToggle={handleToggle} handleToggleAll={handleToggleAll} handleClearCompleted={handleClearCompleted}/>
    </div>
  );
}

export default TodoAddItems;




