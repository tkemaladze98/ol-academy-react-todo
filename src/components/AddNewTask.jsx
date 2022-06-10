import React from "react";

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  render() {
    return (
      <div className="add-div">
        <div className="input">
          <label htmlFor="task">Enter task</label>
          <input
            id="task"
            type="text"
            name="task"
            placeholder="Enter here"
            onChange={(event) => this.setState({ newTask: event.target.value })}
            value={this.state.newTask}
          />
        </div>
        <button
          className="add"
          style={{ backgroundColor: "lightgray" }}
          onClick={() => {
            this.props.addNewTask(this.state.newTask);
            this.setState({ newTask: "" });
          }}
        >
          Add
        </button>
        {this.props.errorMessage !== "" && (
          <p style={{ color: "red" }}>{this.props.errorMessage}</p>
        )}
      </div>
    );
  }
}

export default AddNewTask;
