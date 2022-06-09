import React from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage:"",
      todos: [],
    };
  }

  addNewTask = (tittle) => {
    if (tittle.length === 0) {
      return;
    }
    const isDublicate = this.state.todos.some((todo) => todo.tittle === tittle);
    if (isDublicate) {
      this.setState({errorMessage:"Error: " + tittle + " already declared"})
      return;
    }
    let newToDo;
    if (this.state.todos.length === 0) {
      newToDo = {
        id: 1,
        tittle: tittle,
      };
    } else {
      newToDo = {
        id: this.state.todos[this.state.todos.length - 1].id + 1,
        tittle: tittle,
      };
    }
    this.setState({
      todos: [...this.state.todos, newToDo],
      errorMessage:"",
    });
    
  };

  deleteTask = (id) => {
    const newToDos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newToDos });
  };
  render() {
    return (
      <div>
        <AddNewTask addNewTask={this.addNewTask} errorMessage={this.state.errorMessage}/>
        <ul>
          {this.state.todos.map((todo) => (
            <TaskList
              id={todo.id}
              tittle={todo.tittle}
              deleteTask={this.deleteTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
