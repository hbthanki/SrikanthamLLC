import React, { Component } from 'react';

export default class Entry extends Component {
  state = { message: '' };
  updateMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  onSubmit = () => {
    this.props.onNewMessage(this.state.message);
  };

  render() {
    return (
      //   <div className='ten wide column'>
      <div className='ui grid'>
        <div className='tweleve wide column'>
          <form className='ui form'>
            <div className='field'>
              <textarea
                placeholder='Please enter details about your order'
                value={this.state.message}
                onChange={this.updateMessage}
              ></textarea>
            </div>
            <div className='ui primary tiny button' onClick={this.onSubmit}>
              Add
            </div>
          </form>
        </div>
      </div>
      //   </div>
    );
  }
}
