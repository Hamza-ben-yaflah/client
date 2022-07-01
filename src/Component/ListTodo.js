import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
const ListTodo = () => {
  const [todo, setTodo] = useState([]);

  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location = "/";
    // setTodo(todo.filter((element) => element.todo_id !== id));
  };

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(async (response) => await response.json())
      .then((data) => {
        setTodo(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(todo);

  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {todo &&
            todo.map((element) => (
              <tr key={element.todo_id}>
                <td>{element.description}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(element.todo_id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <EditTodo todo={element} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
