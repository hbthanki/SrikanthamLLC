import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '489731495661-avi3m7s5be7hefr44m4nm0au0q4p11d9.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    // if (isSignedIn) {
    //   this.props.signIn(this.auth.currentUser.get().getId());
    // } else {
    //   this.props.signOut();
    // }
  };

  onSignInButtonClick = () => {
    this.auth.signIn();
  };

  onSignOutButtonClick = () => {
    this.auth.signOut();
    console.log(this.props);
    // this.props.onLogOut(this.auth);
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          className='ui red mini google button'
          onClick={this.onSignOutButtonClick}
        >
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className='ui red mini google button'
          onClick={this.onSignInButtonClick}
        >
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isSignedIn: state.auth.isSignedIn,
//   };
// };

export default GoogleAuth;
