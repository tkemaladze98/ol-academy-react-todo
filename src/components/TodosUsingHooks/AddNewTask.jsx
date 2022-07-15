import { useState} from "react";
import "../styles/addNewTask.scss";

function AddNewTask(props) {
  const [newTask, setNewTask] = useState("");

  const clearNewTask = () => {
    setNewTask("");
  };

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
            onChange={(event) => setNewTask(event.target.value)}
            value={newTask}
          />
        </div>
        <button
          className="add"
          onClick={() => {
            props.addNewTask(newTask, clearNewTask);
          }}
        >
          Add
        </button>
      </div>
      {props.errorMessage !== "" && (
        <article>
          <p>{props.errorMessage}</p>
        </article>
      )}
    </div>
  );
}

export default AddNewTask;
