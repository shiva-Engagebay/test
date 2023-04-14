import React from 'react';


function TodoList({ todos, handleToggle, handleToggleAll, handleClearCompleted }) {

  const allCompleted = todos.every((todo) => todo.completed);
  const selectedTodos = todos.filter((todo) => todo.completed);
  const remainingCount = todos.filter((todo) => !todo.completed).length;


  return (
    <div>
        <ul>
            <li className='select-all-text'>
                <input
                    className="todo-check"
                    type="checkbox"
                    checked={allCompleted}
                    onChange={handleToggleAll}
                    required
                />
                <span>Select All</span>
            </li>
            {todos.map((todo, index) => (
                <li key={index} className='todo-data'>
                    <input 
                        className='todo-check'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggle(index)}
                    />
                    <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                </li>
        ))}
        </ul>
        {selectedTodos.length > 0 && (
        <div className='selected-clear'>
          <p className='items-text'>{selectedTodos.length} item(s) selected</p>
          <button onClick={handleClearCompleted} className='clear-btn'>Clear</button>
        </div>
      )}
        <p className='items-left'>{remainingCount} item(s) left</p>
    </div>
  );
}

export default TodoList;
