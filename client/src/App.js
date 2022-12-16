import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const fetchTodosData = async () => {
    const res = await axios.get("/getTodos");
    if (res.data.todos.length >= 0) {
      setTodo(res.data.todos);
    }
  };

  useEffect(() => {
    fetchTodosData();
  }, []);

  return (
    <div className="App">
      <>
        <Todo fetchTodosData={fetchTodosData} />
        <TodoList todosList={todo} fetchTodosData={fetchTodosData} />
      </>
    </div>
  );
}

export default App;
