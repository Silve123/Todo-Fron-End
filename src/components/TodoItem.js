import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <button onClick={() => toggleComplete(todo.id, todo.completed)} className='change-button'>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
