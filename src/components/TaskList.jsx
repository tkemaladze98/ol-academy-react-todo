import React from "react";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li key={this.props.id}>
        <input
          type="checkbox"
          onClick={(event) =>
            this.props.isCheckboxed(this.props.tittle)
          }
        />
        <small>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => this.props.taskGoUp(this.props.id)}
          >
            up
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => this.props.taskGoDown(this.props.id)}
          >
            down
          </span>
        </small>
        {this.props.isDone == "false" ? (
          <span>{this.props.tittle}</span>
        ) : (
          <span style={{ color: "red" }}>{this.props.tittle}</span>
        )}
        <div>
          <button
            style={{
              backgroundColor: "red",
            }}
            onClick={() => this.props.deleteTask(this.props.id)}
          >
            Delete
          </button>
          <button
            style={{
              backgroundColor: "yellow",
            }}
            onClick={() =>
              this.props.startEditing(this.props.tittle, this.props.id)
            }
          >
            Edit
          </button>
          <button
            style={{
              backgroundColor: "green",
            }}
            onClick={() => this.props.taskIsDone(this.props.tittle)}
          >
            Task isDone
          </button>
        </div>
      </li>
    );
  }
}

export default TaskList;
