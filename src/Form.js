import React from 'react';
import PropTypes from 'prop-type';
import Button from './Button'

class Form extends React.Component {
  state = {
    userName: '',
    firstName: '',
    lastName: '',
    gamesPlayed: 0
  };

  handleUserName = event => {
    this.setState({ userName: event.target.value  });
  };

  handleFirstName = event => {
    this.setState({ firstName: event.target.value  });
  };

  handleLastName = event => {
    this.setState({lastName: event.target.value });
  };

  isDisabled = () => {
    const {userName, firstName, lastName} = this.state;
    if(userName.length > 0 && firstName.length > 0 && lastName.length > 0){
      return false
    }
    return true
  }

  submitForm = (event) => {
    this.props.handleSaveUser(event, this.state)
  }

  render(){
    const {errorMsg } = this.props;
    const {userName, firstName, lastName} = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" name="userName" onChange={this.handleUserName} value={userName} placeholder="Username" />
        <input type="text" name="firstName" onChange={this.handleFirstName} value={firstName} placeholder="First name" />
        <input type="text" name="lastName" onChange={this.handleLastName} value={lastName} placeholder="Last name" />
        <Button text={"Cadastrar Gamer"} isDisabled={this.isDisabled()} />
        {errorMsg && (
          <p className="error">{errorMsg}</p>
        )}
      </form>
    );
  }
}


export default Form;
