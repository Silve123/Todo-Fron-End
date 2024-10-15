// File: src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all todos for the logged-in user
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/todos/${user.uid}`);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
    setLoading(false);
  };

  // Add new todo for the logged-in user
  const addTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      await axios.post(`http://localhost:5000/api/todos`, {
        text: newTodo,
        userId: user.uid
      });
      setNewTodo('');
      fetchTodos();  // Refresh the todos list
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Toggle todo completion
  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, {
        completed: !completed,
        userId: user.uid
      });
      fetchTodos();  // Refresh the todos list
    } catch (error) {
      console.error('Error toggling complete:', error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`, {
        data: { userId: user.uid }
      });
      fetchTodos();  // Refresh the todos list
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [user]);

  return (
    <div className="todo-container">
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button">Add Todo</button>
      </div>

      {loading ? <p>Loading...</p> : (
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
