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
      <h2 className='titleHeading'>Todo App</h2>
      <div className='form-section'>
        <form onSubmit={handleSubmit}>
          <input
            className='form-input'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className='submit-btn'>Add</button>
        </form>
      </div>
      <TodoList todos={todos} handleToggle={handleToggle} handleToggleAll={handleToggleAll} handleClearCompleted={handleClearCompleted}/>
    </div>
  );
}

export default TodoAddItems;

