import React from 'react';

export default function ToDoList({
  todo,
  handleToggleTodoCompleted,
  deleteToDo,
}) {
  return (
    <ul>
      {todo.map((todo) => {
        return (
          <li key={todo.id} 
          // nếu checkbox checked-> thêm class "completed"
          className={todo.completed? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodoCompleted(todo.id)}
            />
            <span>{todo.title}</span>
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
