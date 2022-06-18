import React, { useState, useEffect, useCallback } from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";
import DeleteButtons from "./DeleteButtons";
<<<<<<< Updated upstream
import "../styles/toDo.css";
=======
import "../styles/toDo.scss";
>>>>>>> Stashed changes

function ToDo() {
  const [toDos, setTodos] = useState([]);
  const [editingText, setEditText] = useState("");
  const [editingId, setEditId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const addNewTask = (tittle, clear) => {
    if (tittle.length === 0) {
      return;
    }
    const isDublicate = toDos.some((todo) => todo.tittle === tittle);
    if (isDublicate) {
      setErrorMessage("Error: " + tittle + " already declared");
      return;
    }

    let newId = toDos.length === 0 ? 1 : toDos[toDos.length - 1].id + 1;
    let newToDo = {
      id: newId,
      tittle: tittle,
      isDone: false,
      isCheckboxed: false,
    };
    setTodos([...toDos, newToDo]);
    setErrorMessage("");
    clear();
  };

  const isCheckboxed = (value, text) => {
    let newTodos = [];
    toDos.forEach((todo) => {
      if (todo.tittle === text) {
        todo.isCheckboxed = value;
      }
      newTodos.push(todo);
    });
    setTodos(newTodos);
  };
  const swapFunction = (array, swapIndex, index) => {
    let tmpTodo = array[index];
    array[index] = array[swapIndex];
    array[swapIndex] = tmpTodo;
  };

  const taskSwitch = (id, direction) => {
    let newToDos = toDos;
    newToDos.forEach((todo, index) => {
      let swapIndex = direction === "up" ? index - 1 : index + 1;
      if (todo.id === id) {
        if (direction === "up" && index !== 0) {
          swapFunction(newToDos, swapIndex, index);
        } else if (direction === "down" && index !== newToDos.length - 1) {
          swapFunction(newToDos, swapIndex, index);
        }
      }
    });
    setTodos(newToDos);
    forceUpdate();
  };

  const deleteTask = (id) => {
    const newToDos = toDos.filter((todo) => todo.id !== id);
    setTodos(newToDos);
  };

  const startEditing = (text, id) => {
    setEditText(text);
    setEditId(id);
  };

  const endEditing = () => {
    let newTodos = [];
    toDos.forEach((todo) => {
      if (todo.id === editingId) {
        todo.tittle = editingText;
      }
      newTodos.push(todo);
    });
    setTodos(newTodos);
    setEditText("");
    setEditId("");
  };

  const taskIsDone = (text) => {
    let newTodos = [];
    toDos.forEach((todo) => {
      if (todo.tittle === text) {
        todo.isDone = !todo.isDone;
      }
      newTodos.push(todo);
    });
    setTodos(newTodos);
  };

  const deleteAllTask = () => {
    setTodos([]);
  };

  const deleteAllFinishedTask = () => {
    const newTodos = toDos.filter((todo) => todo.isDone !== true);
    setTodos(newTodos);
  };

  const deleteCheckboxedTask = () => {
    const newTodos = toDos.filter((todo) => todo.isCheckboxed !== true);
    setTodos(newTodos);
  };

  return (
    <div className="main-div">
      <AddNewTask addNewTask={addNewTask} errorMessage={errorMessage} />
      {toDos.length === 0 && <h1 className="empty-list">List Is Empty</h1>}
      {toDos.length !== 0 && (
        <ul className="task-list-ul">
          {toDos.map((todo) => (
            <div>
              <TaskList
                id={todo.id}
                tittle={todo.tittle}
                deleteTask={deleteTask}
                startEditing={startEditing}
                isDone={todo.isDone}
                taskIsDone={taskIsDone}
                isCheckboxed={isCheckboxed}
                taskSwitch={taskSwitch}
              />
              {editingText !== "" && editingId === todo.id && (
                <div className="edit-div">
                  <input
                    type="text"
                    onChange={(event) => setEditText(event.target.value)}
                    value={editingText}
                  />
                  <div>
                    <button className="apply-edit" onClick={endEditing}>
                      Apply Edit
                    </button>
                    <button
                      className="cancel-edit"
                      onClick={() => {
                        setEditText("");
                        setEditId("");
                      }}
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
      {toDos.length !== 0 && (
        <DeleteButtons
          deleteAllFinishedTask={deleteAllFinishedTask}
          deleteAllTask={deleteAllTask}
          deleteCheckboxedTask={deleteCheckboxedTask}
        />
      )}
    </div>
  );
}

export default ToDo;
