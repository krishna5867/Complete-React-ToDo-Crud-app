import axios from "axios";
import { Container, Card } from "reactstrap";

const TodoList = ({todosList, BASE_URL, fetchTodosData}) => {
  
  const handleEdit = async (todo) => {
    const todoTitle = prompt("Enter new Title");
    const todoTask = prompt("Enter new Task");

    if (!todoTitle || !todoTask) {
      alert("Please enter both field");
    } else {
      const res = await axios.put(`${BASE_URL}/editTodo/${todo._id}`, {
        ...todo,
        title: todoTitle,
        tasks: todoTask,
      });
      console.log(res);
      fetchTodosData();
    }
  };

  const handleDelete = async (todoId) => {
    const canDelete = window.confirm("Are your Sure?");
    if (canDelete) {
      const res = await axios.delete(`${BASE_URL}/deleteTodo/${todoId}`);
      console.log(res);
      fetchTodosData();
    }
  };

  return (
    <>
      <Container  style={{ width: "78rem" }}>
        <Card>
          {/* <CardBody> */}
          <div className="d-flex mb-4 mt-2">
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
          {/* </CardBody> */}
        </Card>
      </Container>
      {todosList && todosList.length > 0 ? (
        todosList.map((todo) => (
          <Container key={todo._id}  style={{ width: "78rem" }}>
            <Card>
              {/* <CardBody> */}
              <div className="d-flex" key={todo._id}>
              <div className="mt-4">
              {/* <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> */}
                </div>
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
        <Container  style={{ width: "18rem" }}>
          <Card>No data to todos, add one!</Card>
        </Container>
      )}
    </>
  );
};

export default TodoList;
