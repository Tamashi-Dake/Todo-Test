import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function App() {
  //Tạo state: default là todo[], giá trị mới là setToDo
  const [todo, setToDo] = useState([]);

  // hàm thêm phần tử vào todo[]: lấy all phần tử trong todo + todoitem
  function addTodo(todoitem) {
    setToDo([...todo, todoitem])
  }

  // map lọc qua todo[], nếu trùng id -> đảo completed
  function handleToggleTodoCompleted(id) {
    const updatedTodos = todo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    // cập nhật lại todo[]
    setToDo(updatedTodos);
  }
  // filter lọc ra todo khác id
  function deleteToDo(id) {
    setToDo(todo =>{
      return todo.filter(todo => todo.id !== id)
    });
  }
  return (
    <>
      <h1>To do app</h1>
      <ToDoForm  addTodo={addTodo}/>
      <section>
        <h1>To do list</h1>
        <ToDoList  todo={todo}
        handleToggleTodoCompleted={handleToggleTodoCompleted}
        deleteToDo={deleteToDo}
        />
      </section>
    </>
  );
}
