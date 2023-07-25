import React, { useState } from 'react';

export default function ToDoForm({addTodo}) {
  //Tạo state: default là input, giá trị mới là setInput
  const [input, setInput] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (input !== '') {
      addTodo({ id: crypto.randomUUID(), title: input, completed: false });
      setInput('');
    }
  }
   return (
      <form onSubmit={handleSubmit}>
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

  );
}
