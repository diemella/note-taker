import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Enter notes here.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Note content was submitted:' + this.state.value);
    // event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Text:<br />
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label><br />
        <input type="submit" value="Save" />
      </form>
      );
  }

}

export default NoteForm;