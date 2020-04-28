import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    // console.log(this.props.message);
    return (
      <React.Fragment>
        <div className='ui fluid raised card'>
          <div className='content'>
            <div className='header'>Mr. Srikantham</div>
            <div className='meta'>
              <span className=''>CEO Srikantham LLC.</span>
              <i className='map marker alternate icon'></i>Edison, NJ
              <span className='right floated time'>2 days ago</span>
            </div>
            <div className='description'>
              <p>{this.props.message.body}</p>
            </div>
          </div>
          <div className='extra content'>
            <a className='like left floated'>
              <i className='like icon'></i> 9999 Likes
            </a>
            <div className='right floated author'>
              <img
                className='ui avatar image'
                src='https://semantic-ui.com/images/avatar/small/matt.jpg'
                alt=''
              />
              Anil
            </div>
          </div>
        </div>
        {/* <div className='ui fluid raised card'>
          <div className='content'>
            <div className='header'>Mr. Srikantham</div>
            <div className='meta'>
              <span className=''>CEO Srikantham LLC.</span>
              <i className='map marker alternate icon'></i>Edison, NJ
              <span className='right floated time'>2 days ago</span>
            </div>
            <div className='description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                esse eos sed laboriosam voluptatibus nulla harum dolorum! Error
                amet, voluptatibus aliquid optio molestias minus aperiam alias
                assumenda cumque, sint ea!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                nulla impedit nesciunt adipisci iste quas qui soluta, eum quos
                consequuntur laudantium quam? Voluptate, corrupti eligendi.
                Delectus, fugiat? Culpa, debitis ipsa.
              </p>
            </div>
          </div>
          <div className='extra content'>
            <a className='like left floated' href>
              <i className='like icon'></i> 9999 Likes
            </a>
            <div className='right floated author'>
              <img
                className='ui avatar image'
                src='https://semantic-ui.com/images/avatar/small/matt.jpg'
                alt=''
              />
              Anil
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}
