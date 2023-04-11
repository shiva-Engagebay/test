import React from 'react';
import './todoList.css'


function TodoList({ todos, handleToggle, handleToggleAll, handleClearCompleted }) {

  const allCompleted = todos.every((todo) => todo.completed);
  const selectedTodos = todos.filter((todo) => todo.completed);
  const remainingCount = todos.filter((todo) => !todo.completed).length;


  return (
    <div>
        <ul>
            <li>
                <input
                    type="checkbox"
                    checked={allCompleted}
                    onChange={handleToggleAll}
                />
                <span>Select All</span>
            </li>
            {todos.map((todo, index) => (
                <li key={index}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(index)}
                />
                    <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                </li>
        ))}
        </ul>
        {selectedTodos.length > 0 && (
        <div>
          <p>{selectedTodos.length} item(s) selected</p>
          <button onClick={handleClearCompleted}>Clear All</button>
        </div>
      )}
        <p>{remainingCount} item(s) left</p>
    </div>
  );
}

export default TodoList;
