import React from 'react';

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  };

  render() {
    const { todo } = this.props;

    return (
      <li onClick={this.handleClick}>
        {todo.name}
        {todo.completed ? <span>- completed</span> : null}
      </li>
    );
  }
}
