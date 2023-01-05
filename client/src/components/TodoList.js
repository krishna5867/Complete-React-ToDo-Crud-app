import axios from "axios";
import { Container, Card } from "reactstrap";

const TodoList = ({ todosList, fetchTodosData }) => {
  const handleEdit = async (todo) => {
    const todoTitle = prompt("Enter new Title");
    const todoTask = prompt("Enter new Task");

    if (!todoTitle || !todoTask) {
      alert("Please enter both field");
    } else {
      await axios.put(`/editTodo/${todo._id}`, {
        ...todo,
        title: todoTitle,
        tasks: todoTask,
      });

      fetchTodosData();
    }
  };

  const handleDelete = async (todoId) => {
    const canDelete = window.confirm("Are your Sure?");
    if (canDelete) {
      await axios.delete(`/deleteTodo/${todoId}`);

      fetchTodosData();
    }
  };

  return (
    <>
      <Container style={{ width: "78rem" }}>
        <Card>
          <div className="d-flex mt-2">
            <div style={{ width: "30rem" }}>
              <h3>Title</h3>
            </div>
            <div style={{ width: "30rem" }}>
              <h3>Task</h3>
            </div>
            <div style={{ width: "30rem" }}>
              <h3>Status</h3>
            </div>
          </div>
        </Card>
      </Container>
      {todosList && todosList.length > 0 ? (
        todosList.map((todo) => (
          <Container key={todo._id} style={{ width: "78rem" }}>
            <Card>
              <div className="d-flex" key={todo._id}>
                <div style={{ width: "30rem" }} className="py-2">
                  <h4>{todo.title}</h4>
                </div>
                <div style={{ width: "30rem" }} className="py-2">
                  <h4>{todo.tasks}</h4>
                </div>
                <div style={{ width: "30rem" }}>
                  <button
                    className="btn btn-secondary sm:col-12 mx-1 my-2"
                    onClick={() => handleEdit(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger sm:col-12 my-2"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          </Container>
        ))
      ) : (
        <Container style={{ width: "18rem" }}>
          <Card>No data to todos, add one!</Card>
        </Container>
      )}
    </>
  );
};

export default TodoList;
