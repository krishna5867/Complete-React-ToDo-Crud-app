import React from 'react'
import { Container, Card, CardBody, Label, Input } from 'reactstrap'
import { useState } from 'react'
import axios from 'axios'
import { TodoLists } from './TodoLists'


const Todo = ({ fetchTodosData }) => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState("");

  const submitData = async () => {
    try {
        const todo = {
            title: title,
            tasks: tasks,
        };

        const res = await axios.post("http://localhost:4000/createTodo", todo);
        if (res.data.success) {
            console.log("Title created successfully");
            await todo.save();
            fetchTodosData();
        }
    } catch (error) {
        console.log(error);
        console.log(error.response.data.message);
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    submitData();
    setTitle("");
    setTasks("");
    if((title || tasks) === ""){
        alert("Todo Field can't be Empty")
  }else{
    console.log("data submittend");
  };
}

  return (
    <div>
      <Container className='mt-4' style={{ width: '78rem' }}>
        <Card>
          <CardBody>
            <Container className='mb-4'>
              <form onSubmit={handleSubmit}>
                <h3 className='mt-2'> Todo App</h3>
                <CardBody className='mt-2 d-flex'>
                  {/* <Label>Title</Label> */}
                  <Input
                    type='text'
                    id='title'
                    name='title'
                    value={title}
                    placeholder='Todo Title'
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </CardBody>
                <CardBody>
                  {/* <Label>Task</Label> */}
                  <Input
                    type='text'
                    id='task'
                    name='task'
                    value={tasks}
                    placeholder='Task Name'
                    onChange={(e) => {
                      setTasks(e.target.value);
                    }}
                  />
                  <button className='btn btn-success btn-lg col-12  mt-4' type='Submit'>Add Todo</button>
                </CardBody>
              </form>
            </Container>
            <TodoLists />
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}



export default Todo;
