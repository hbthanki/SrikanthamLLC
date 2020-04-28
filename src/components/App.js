import React, { Component } from 'react';
import MessageList from './MessageList';
import Entry from './Entry';
import Header from './Header';

class App extends Component {
  state = { messageList: [], newMessage: null };

  handleNewMessage = (msg) => {
    this.setState({
      messageList: [
        {
          userId: 999,
          id: 3824,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: msg,
        },
        ...this.state.messageList,
      ],
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      // this.setState({ messageList: res.body })
      .then((result) => this.setState({ messageList: [...result] }));
  }

  componentWillUnmount() {}

  handleNewMessage(auth) {
    console.log(auth);
  }

  render() {
    return (
      <div>
        <Header onLogout={this.handleLogout} />
        <div className='ui container'>
          <div className='ui relaxed grid'>
            <div className='row'>
              <div className='three wide column'></div>
              <div className='ten wide column'>
                <Entry onNewMessage={this.handleNewMessage} />
                <p>{this.state.messageList.length}</p>
                <MessageList messageList={this.state.messageList} />
              </div>
            </div>
          </div>
          <div className='three wide column'></div>
        </div>
      </div>
    );
  }
}

export default App;
