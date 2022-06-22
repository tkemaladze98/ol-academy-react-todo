import React from "react";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import "../styles/taskList.scss";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li className="list-element">
        <div className="list-item">
          <input
            type="checkbox"
            onClick={(event) =>
              this.props.isCheckboxed(event.target.checked, this.props.tittle)
            }
          />
          <small>
            <span onClick={() => this.props.taskSwitch(this.props.id, "up")}>
              <AiOutlineUp />
            </span>
            <span onClick={() => this.props.taskSwitch(this.props.id, "down")}>
              <AiOutlineDown />
            </span>
          </small>
          {this.props.isDone === false ? (
            <span className="unfinished-task">{this.props.tittle}</span>
          ) : (
            <span className="finished-task">{this.props.tittle}</span>
          )}
        </div>
        <div className="list-buttons">
          <button
            className="delete-btn"
            onClick={() => this.props.deleteTask(this.props.id)}
          >
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() =>
              this.props.startEditing(this.props.tittle, this.props.id)
            }
          >
            Edit
          </button>
          {this.props.isDone === false ? (
            <button
              className="isnotdone-btn"
              onClick={() => this.props.taskIsDone(this.props.tittle)}
            >
              Isn't Done
            </button>
          ) : (
            <button
              className="isdone-btn"
              onClick={() => this.props.taskIsDone(this.props.tittle)}
            >
              Done
            </button>
          )}
        </div>
      </li>
    );
  }
}

export default TaskList;
