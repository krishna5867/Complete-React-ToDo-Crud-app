import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const BASE_URL = "https://complete-react-todo-crud-app-production.up.railway.app";


function App() {
  const [todo, setTodo] = useState([]);

  const fetchTodosData = async () => {
    const res = await axios.get(`${BASE_URL}/getTodos`);
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
        <Todo 
        fetchTodosData={fetchTodosData} 
        BASE_URL={BASE_URL}/>
        
        <TodoList 
        todo={todo} 
        setTodo={setTodo} 
        fetchTodosData={fetchTodosData} 
        BASE_URL={BASE_URL} />
      </>
    </div>
  );
}

export default App;
