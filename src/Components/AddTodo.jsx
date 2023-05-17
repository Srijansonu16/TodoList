import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddTodo = (props) => {
  const [currentTaskName, setCurrentTaskName] = React.useState();

  const onChangeHandler = (e) => {
    setCurrentTaskName(e.target.value);
  };

  const onSaveHandler = () => {
    props.callback(currentTaskName);
  };

  return (
    <div className="container">
      <h1>AddTodo </h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Todo Here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={onChangeHandler}
        />
        <Button
          style={{ background: "yellow", color: "blue" }}
          onClick={onSaveHandler}
          variant="outline-secondary"
          id="button-addon2"
        >
          Save
        </Button>
      </InputGroup>
    </div>
  );
};
export default AddTodo;
