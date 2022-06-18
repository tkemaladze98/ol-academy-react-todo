import React from "react";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import "../styles/taskList.scss";

function TaskList(props) {
  return (
    <li className="list-element" key={`li-${props.id}`}>
      <div className="list-item">
        <input
          type="checkbox"
          onClick={(event) =>
            props.isCheckboxed(event.target.checked, props.tittle)
          }
        />
        <small>
          <span onClick={() => props.taskSwitch(props.id, "up")}>
            <AiOutlineUp />
          </span>
          <span onClick={() => props.taskSwitch(props.id, "down")}>
            <AiOutlineDown />
          </span>
        </small>
        {props.isDone === false ? (
          <span className="unfinished-task">{props.tittle}</span>
        ) : (
          <span className="finished-task">{props.tittle}</span>
        )}
      </div>
      <div className="list-buttons">
        <button
          className="delete-btn"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
        <button
          className="edit-btn"
          onClick={() => props.startEditing(props.tittle, props.id)}
        >
          Edit
        </button>
        {props.isDone === false ? (
          <button
            className="isnotdone-btn"
            onClick={() => props.taskIsDone(props.tittle)}
          >
            Isn't Done
          </button>
        ) : (
          <button
            className="isdone-btn"
            onClick={() => props.taskIsDone(props.tittle)}
          >
            Done
          </button>
        )}
      </div>
    </li>
  );
}

export default TaskList;
