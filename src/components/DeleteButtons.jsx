import React from "react";

class DeleteButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="button-div">
        <button
          style={{
            backgroundColor: "red",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => this.props.deleteAllTask()}
        >
          Delete All Task
        </button>
        <button
          style={{
            backgroundColor: "red",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => this.props.deleteAllFinishedTask()}
        >
          Delete All Finished Task
        </button>
        <button
          style={{
            backgroundColor: "red",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => this.props.deleteCheckboxedTask()}
        >
          Delete All Chekcboxed Task
        </button>
      </div>
    );
  }
}

export default DeleteButtons;
