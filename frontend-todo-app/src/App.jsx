import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodo] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET"
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodo(data);
      })
    });
  });

  return (
    <>
      <h1 className="heading1">ToDo App</h1>
      <div>
        <h3>Hi there👋</h3>
      </div>

      {todos.map(todos => {
        return (
          <div>
            {todos.todoTitle}
            {todos.todoDescription}
            <button>Delete</button>
            <br />
          </div>
        );
      })}

      <div>
        <a href="https://github.com/ayushmanyd" target="_blank">
          GitHub
        </a>
      </div>
    </>
  );
}

export default App;
