import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "College",
      description: "In college from 8 to 2.",
    },
    {
      id: 2,
      title: "Meeting",
      description: "Attend meeting from 5 to 6.",
    },
    {
      id: 3,
      title: "Coding",
      description: "Code till 11.",
    },
  ]);

  return (
    <>
      <h1 className="heading1">ToDo App</h1>
      <div>
        <h3>Hi there👋</h3>
      </div>

      {todo.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}

      <div>
        <a href="https://github.com/ayushmanyd" target="_blank">
          GitHub
        </a>
      </div>
    </>
  );
}

function Todo(props) {
  return (
    <div>
      {props.title}
      {props.description}
    </div>
  );
}

export default App;
