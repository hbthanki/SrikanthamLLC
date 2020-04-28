import React, { Component } from 'react';
import Message from './Message';

export default class MessageList extends Component {
  render() {
    console.log(this.props);
    return (
      //   <div className='ui grid'>
      //     <div className='six column wide'>
      <div className='ui list'>
        {this.props.messageList.map((msg) => {
          return <Message message={msg} key={msg.id} />;
        })}
      </div>
      //     </div>
      //   </div>
    );
  }
}
