import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Card from "react-bootstrap/Card";

const Main = () => {
  const [todoList, setTodoList] = React.useState([]);

  const addcallback = (taskName) => {
    const uniqueId = Date.now();
    setTodoList([...todoList, { id: uniqueId, name: taskName }]);
  };

  const deleteCallback = (id) => {
    const allTask = Object.assign([], todoList);

    const position = allTask.findIndex((el) => el.id == id);

    allTask[position] = {
      id: id
    };
    setTodoList(allTask);
  };

  const editCallback = (id, name) => {
    const newTaskName = prompt("updated task name", name);
    const allTask = Object.assign([], todoList);

    const position = allTask.findIndex((el) => el.id == id);

    allTask[position] = {
      id: id,
      name: newTaskName
    };
    setTodoList(allTask);
  };

  return (
    <div className="container">
      <h1>Main Component</h1>
      <Card>
        <Card.Body>
          <AddTodo callback={addcallback} />
          <TodoList
            onEdit={editCallback}
            onDelete={deleteCallback}
            tasks={todoList}
          />
        </Card.Body>
      </Card>
    </div>
  );
};
export default Main;
