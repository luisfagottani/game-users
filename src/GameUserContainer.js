import React, {Component} from 'react';
import PropTypes from 'prop-type';
import Form from './Form';


class GameUserContainer extends Component {
  state = {
    gameUser: {},
    firstName: '',
    lastName: '',
    userName: ''

  };
  render() {
    const {firstName, lastName, userName} = this.state;
    return (
      <Form firtName={firstName} lastName={lastName} userName={userName} />
    )
  }
}

export default GameUserContainer;
