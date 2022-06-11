import React from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";
import DeleteButtons from "./DeleteButtons";
import "./toDo.css"

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingText: "",
      editingId: "",
      errorMessage: "",
      todos: [],
    };
  }

  isCheckboxed = (value, text) => {
    let newTodos = [];
    this.state.todos.forEach((todo) => {
      if (todo.tittle === text) {
        todo.isCheckboxed = value;
      }
      newTodos.push(todo);
    });
    this.setState({
      todos: newTodos,
    });
  };
  taskIsDone = (text) => {
    let newTodos = [];
    this.state.todos.forEach((todo) => {
      if (todo.tittle === text) {
        todo.isDone = !todo.isDone;
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
      if (todo.id === this.state.editingId) {
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

  taskSwitch = (id, direction) => {
    let checkIndex = false;
    let newTodos = this.state.todos;
    for (let index = 0; index < newTodos.length; index++) {
      if (direction === "up") {
        checkIndex = index !== 0 ? true : false;
      }
      if (direction === "down") {
        checkIndex = index !== newTodos.length - 1 ? true : false;
      }
      if (newTodos[index].id === id && checkIndex) {
        let swapIndex = direction === "up" ? index - 1 : index + 1;
        let tmpTodo = newTodos[index];
        newTodos[index] = newTodos[swapIndex];
        newTodos[swapIndex] = tmpTodo;
        break;
      }
    }
    this.setState({
      todos: newTodos,
    });
  };

  addNewTask = (tittle, clear) => {
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
        isDone: false,
        isCheckboxed: false,
      };
    } else {
      newToDo = {
        id: this.state.todos[this.state.todos.length - 1].id + 1,
        tittle: tittle,
        isDone: false,
        isCheckboxed: false,
      };
    }
    this.setState({
      todos: [...this.state.todos, newToDo],
      errorMessage: "",
    });
    clear();
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
    const newTodos = this.state.todos.filter((todo) => todo.isDone !== true);
    this.setState({
      todos: newTodos,
    });
  };

  deleteCheckboxedTask = () => {
    const newTodos = this.state.todos.filter(
      (todo) => todo.isCheckboxed !== true
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
        {this.state.todos.length === 0 && (
          <h1
          className="empty-list"
          >
            List Is Empty
          </h1>
        )}
        {this.state.todos.length !== 0 && (
          <ul>
            {this.state.todos.map((todo) => (
              <div>
                <TaskList
                  id={todo.id}
                  tittle={todo.tittle}
                  deleteTask={this.deleteTask}
                  startEditing={this.startEditing}
                  isDone={todo.isDone}
                  taskIsDone={this.taskIsDone}
                  isCheckboxed={this.isCheckboxed}
                  taskSwitch={this.taskSwitch}
                />
                {this.state.editingText !== "" &&
                  this.state.editingId === todo.id && (
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
                        className="apply-edit"
                          onClick={this.endEditing}
                        >
                          Apply Edit
                        </button>
                        <button
                        className="cancel-edit"
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
            ))}
          </ul>
        )}
        {this.state.todos.length !== 0 && (
          <DeleteButtons
            deleteAllFinishedTask={this.deleteAllFinishedTask}
            deleteAllTask={this.deleteAllTask}
            deleteCheckboxedTask={this.deleteCheckboxedTask}
          />
        )}
      </div>
    );
  }
}

export default ToDo;
