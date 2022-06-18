import React from "react";
import "./deleteButtons.scss";

class DeleteButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="button-div">
        <button onClick={() => this.props.deleteAllTask()}>
          Delete All Task
        </button>
        <button onClick={() => this.props.deleteAllFinishedTask()}>
          Delete All Finished Task
        </button>
        <button onClick={() => this.props.deleteCheckboxedTask()}>
          Delete All Chekcboxed Task
        </button>
      </div>
    );
  }
}

export default DeleteButtons;
