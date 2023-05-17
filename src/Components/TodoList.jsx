import React from "react";
import Table from "react-bootstrap/Table";

const TodoList = (props) => {
  return (
    <div className="container">
      <h1>TodoList </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>todo</th>
            <th colspan="2">action</th>
          </tr>
        </thead>

        <tbody>
          {props.tasks.map((el, key) => {
            return (
              <tr>
                <td>{key + 1}</td>
                <td>{el.name}</td>
                <td>
                  <button onClick={() => props.onDelete(el.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => props.onEdit(el.id, el.name)}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default TodoList;
