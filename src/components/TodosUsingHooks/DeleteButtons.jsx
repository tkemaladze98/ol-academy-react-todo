import React from "react";
<<<<<<< Updated upstream
import "../styles/deleteButtons.css";
=======
import "../styles/deleteButtons.scss";
>>>>>>> Stashed changes

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
