import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [input, setInput] = useState('');
  const [todo, setToDo] = useState([]);
  function updateTodo(event) {
    event.preventDefault();

    if (input !== '') {
      setToDo([
        ...todo,
        { id: crypto.randomUUID(), title: input, completed: false },
      ]);
      setInput(''); //chú ý syntax
    }
  }
  function handleToggleTodoCompleted(id) {
    const updatedTodos = todo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDo(updatedTodos);
  }
  function deleteToDo(id) {
    setToDo(todo =>{
      return todo.filter(todo => todo.id !== id)
    });
  }
  return (
    <>
      <h1>To do app</h1>
      <form onSubmit={updateTodo}>
        <label htmlFor="input">Write something</label>
        <br />
        <input
          id="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add something to do</button>
      </form>
      <div>
        <h1>To do list</h1>
        <ul>
          {todo.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodoCompleted(todo.id)}
                />
                {todo.title}
                <button onClick={()=> deleteToDo(todo.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
