import React from "react";
import "../styles/deleteButtons.scss";

function DeleteButtons(props) {
  return (
    <div className="button-div">
      <button onClick={() => props.deleteAllTask()}>Delete All Task</button>
      <button onClick={() => props.deleteAllFinishedTask()}>
        Delete All Finished Task
      </button>
      <button onClick={() => props.deleteCheckboxedTask()}>
        Delete All Chekcboxed Task
      </button>
    </div>
  );
}

export default DeleteButtons;
