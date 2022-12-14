import axios from "axios";
import { Container, Card } from "reactstrap";

const TodoList = (props) => {
  const handleEdit = async (todo) => {
    const todoTitle = prompt("Enter new Title");
    const todoTask = prompt("Enter new Task");

    if (!todoTitle || !todoTask) {
      alert("Please enter both field");
    } else {
      const res = await axios.put(`/editTodo/${todo._id}`, {
        ...todo,
        title: todoTitle,
        tasks: todoTask,
      });
      console.log(res);
      props.fetchTodosData();
    }
  };

  const handleDelete = async (todoId) => {
    const canDelete = window.confirm("Are your Sure?");
    if (canDelete) {
      const res = await axios.delete(`/deleteTodo/${todoId}`);
      console.log(res);
      props.fetchTodosData();
    }
  };

  return (
    <>
      <Container>
        <Card>
          {/* <CardBody> */}
          <div className="d-flex mb-4 mt-2">
            <div style={{ width: "30rem" }} className="">
              <h3>Title</h3>
            </div>
            <div style={{ width: "30rem" }}>
              <h3>Task</h3>
            </div>
            <div style={{ width: "30rem" }}>
              <h3>Status</h3>
            </div>
          </div>
          {/* </CardBody> */}
        </Card>
      </Container>
      {props.todosList && props.todosList.length > 0 ? (
        props.todosList.map((todo) => (
          <Container key={todo._id}>
            <Card>
              {/* <CardBody> */}
              <div className="d-flex" key={todo._id}>
                <div style={{ width: "30rem" }} className="mt-4">
                  <h4>{todo.title}</h4>
                </div>
                <div style={{ width: "30rem" }} className="mt-4">
                  <h4>{todo.tasks}</h4>
                </div>
                <div style={{ width: "30rem" }}>
                  <button
                    className="btn btn-secondary sm:col-12 mx-3 mt-3"
                    onClick={() => handleEdit(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger sm:col-12 mt-3"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              {/* </CardBody> */}
            </Card>
          </Container>
        ))
      ) : (
        <Container>
          <Card>No data to todos, add one!</Card>
        </Container>
      )}
    </>
  );
};

export default TodoList;
