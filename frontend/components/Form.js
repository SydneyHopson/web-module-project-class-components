import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { comment } = this.state;
    if (comment.trim() !== '') {
      this.props.handleAdd(comment);
      this.setState({ comment: '' });
    }
  };

  render() {
    const { comment } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={comment} onChange={this.handleChange} placeholder="Enter a comment" />
        <button type="submit">Add Comment</button>
      </form>
    );
  }
}

export default Form;
