import React from "react";
import "./addNewTask.scss"

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  clearNewTask = () =>{
    this.setState({newTask:""})
  }

  render() {
    return (
      <div>
        <div className="add-div">
          <div className="input">
            <label htmlFor="task">Enter task</label>
            <input
              id="task"
              type="text"
              name="task"
              placeholder="Enter here"
              onChange={(event) =>
                this.setState({ newTask: event.target.value })
              }
              value={this.state.newTask}
            />
          </div>
          <button
            className="add"
            onClick={() => {
              this.props.addNewTask(this.state.newTask,this.clearNewTask);
            }}
          >
            Add
          </button>
        </div>
        {this.props.errorMessage !== "" && (
          <article>
            <p>{this.props.errorMessage}</p>
          </article>
        )}
      </div>
    );
  }
}

export default AddNewTask;
