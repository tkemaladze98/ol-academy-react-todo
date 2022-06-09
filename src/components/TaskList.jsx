import React from "react";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li key={this.props.id}>
        <span>{this.props.tittle}</span>
        <button onClick={() => this.props.deleteTask(this.props.id)}>delete</button>
      </li>
    );
  }
}

export default TaskList;
