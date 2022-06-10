import React from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";
import DeleteButtons from "./DeleteButtons";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingText: "",
      editingId: "",
      errorMessage: "",
      todos: [
        {
          id: 1,
          tittle: "I have to finish my homework",
          isDone: "false",
          isCheckboxed: "off",
        },
        {
          id: 2,
          tittle: "I have to go with friends at 9:00 am",
          isDone: "false",
          isCheckboxed: "off",
        },
      ],
    };
  }

  isCheckboxed = (text) => {
    let newTodos = [];
    this.state.todos.forEach((todo) => {
      if (todo.tittle == text) {
        if (todo.isCheckboxed == "off") {
          todo.isCheckboxed = "on";
        } else {
          todo.isCheckboxed = "off";
        }
      }
      newTodos.push(todo);
    });
    this.setState({
      todos: newTodos,
    });
    console.log(this.state.todos);
  };
  taskIsDone = (text) => {
    let newTodos = [];
    this.state.todos.forEach((todo) => {
      if (todo.tittle == text) {
        todo.isDone = "true";
      }
      newTodos.push(todo);
    });
    this.setState({
      todos: newTodos,
    });
  };
  startEditing = (text, id) => {
    this.setState({ editingText: text, editingId: id });
  };

  endEditing = () => {
    let newTodos = [];
    this.state.todos.forEach((todo) => {
      if (todo.id == this.state.editingId) {
        todo.tittle = this.state.editingText;
      }
      newTodos.push(todo);
    });
    this.setState({
      todos: newTodos,
      editingId: "",
      editingText: "",
    });
  };

  taskGoUp = (id) => {
    let newTodos = this.state.todos;
    for (let index in newTodos) {
      if (newTodos[index].id == id && index != 0) {
        let tmpTodo = newTodos[index];
        newTodos[index] = newTodos[index - 1];
        newTodos[index - 1] = tmpTodo;
        break;
      }
    }
    this.setState({
      todos: newTodos,
    });
  };
  taskGoDown = (id) => {
    let newTodos = this.state.todos;
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id == id && i != newTodos.length - 1) {
        let tmpTodo = newTodos[i];
        newTodos[i] = newTodos[i + 1];
        newTodos[i + 1] = tmpTodo;
        break;
      }
    }
    this.setState({
      todos: newTodos,
    });
  };

  addNewTask = (tittle) => {
    if (tittle.length === 0) {
      return;
    }
    const isDublicate = this.state.todos.some((todo) => todo.tittle === tittle);
    if (isDublicate) {
      this.setState({ errorMessage: "Error: " + tittle + " already declared" });
      return;
    }
    let newToDo;
    if (this.state.todos.length === 0) {
      newToDo = {
        id: 1,
        tittle: tittle,
        isDone: "false",
        isCheckboxed: "off",
      };
    } else {
      newToDo = {
        id: this.state.todos[this.state.todos.length - 1].id + 1,
        tittle: tittle,
        isDone: "false",
        isCheckboxed: "off",
      };
    }
    this.setState({
      todos: [...this.state.todos, newToDo],
      errorMessage: "",
    });
  };

  deleteTask = (id) => {
    const newToDos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newToDos });
  };

  deleteAllTask = () => {
    this.setState({
      todos: [],
    });
  };

  deleteAllFinishedTask = () => {
    const newTodos = this.state.todos.filter((todo) => todo.isDone != "true");
    this.setState({
      todos: newTodos,
    });
  };

  deleteCheckboxedTask = () => {
    const newTodos = this.state.todos.filter(
      (todo) => todo.isCheckboxed != "on"
    );
    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="main-div">
        <AddNewTask
          addNewTask={this.addNewTask}
          errorMessage={this.state.errorMessage}
        />
        <ul>
          {this.state.todos.map((todo) => (
            <TaskList
              id={todo.id}
              tittle={todo.tittle}
              deleteTask={this.deleteTask}
              startEditing={this.startEditing}
              isDone={todo.isDone}
              taskIsDone={this.taskIsDone}
              isCheckboxed={this.isCheckboxed}
              taskGoUp={this.taskGoUp}
              taskGoDown={this.taskGoDown}
            />
          ))}
        </ul>
        <DeleteButtons
          deleteAllFinishedTask={this.deleteAllFinishedTask}
          deleteAllTask={this.deleteAllTask}
          deleteCheckboxedTask={this.deleteCheckboxedTask}
        />
        {this.state.editingText !== "" && (
          <div className="edit-div">
            <input
              type="text"
              onChange={(event) =>
                this.setState({ editingText: event.target.value })
              }
              value={this.state.editingText}
            />
            <div>
              <button
                style={{ backgroundColor: "green" }}
                onClick={this.endEditing}
              >
                Apply Edit
              </button>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() =>
                  this.setState({ editingText: "", editingId: "" })
                }
              >
                Cancel Edit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ToDo;
