import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import { Container, Card } from 'reactstrap'

export const TodoLists = () => {
    const [todo, setTodo] = useState([]);

    const fetchTodosData = async () => {
        const res = await axios.get("http://localhost:4000/gettodos");
        if (res.data.todos.length >= 0) {
            setTodo(res.data.todos);
        }
    };

    useEffect(() => {
        fetchTodosData();
    }, [todo]);


    const handleEdit = async (todo) => {
        const todoTitle = prompt("Enter new Title");
        const todoTask = prompt("Enter new Task");

        if (!todoTitle || !todoTask) {
            alert("Please enter both field");
        } else {
            const res = await axios.put(`http://localhost:4000/editTodo/${todo._id}`, {
                title: todoTitle,
                tasks: todoTask,
                todo
            });
            console.log(res);
                }
        };

        const handleDelete = async (todoId) => {
            alert("Are your Sure");
            const res = await axios.delete(`http://localhost:4000/deleteTodo/${todoId}`);
            console.log(res);
        };

        return (
            <>
                <Container>
                    <Card>
                        {/* <CardBody> */}
                        <div className="d-flex mb-4 mt-2">
                            <div style={{ width: "30rem" }} className=""><h3>Title</h3></div>
                            <div style={{ width: "30rem" }}> <h3>Task</h3> </div>
                            <div style={{ width: "30rem" }}> <h3>Status</h3></div>
                        </div>
                        {/* </CardBody> */}
                    </Card>
                </Container>
                {todo && todo.map((todo) => (
                    <>
                        <Container>
                            <Card>
                                {/* <CardBody> */}
                                <div className="d-flex" key={todo._id}>
                                    <div style={{ width: "30rem" }} className="mt-4"><h4 >{todo.title}</h4></div>
                                    <div style={{ width: "30rem" }} className="mt-4"><h4 >{todo.tasks}</h4></div>
                                    <div style={{ width: "30rem" }}>
                                        <button className='btn btn-secondary sm:col-12 mx-3 mt-3' onClick={() => handleEdit(todo)}>Edit</button>
                                        <button className='btn btn-danger sm:col-12 mt-3' onClick={() => handleDelete(todo._id)}>Delete</button>
                                    </div>
                                </div>
                                {/* </CardBody> */}
                            </Card>
                        </Container>
                    </>
                ))}
            </>
        )
};
