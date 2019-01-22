import React from 'react';
import PropTypes from 'prop-type';
import Button from './Button'

const Form = (props) => {
  const {userName, lastName, firstName, handleSaveUser, handleUserName, handleFirstName, handleLastName } = props;
    return (
      <form action={handleSaveUser}>
        <input type="text" name="userName" onChange={handleUserName} value={userName} placeholder="Username" />
        <input type="text" name="firstName" onChange={handleFirstName} value={firstName} placeholder="First name" />
        <input type="text" name="userName" onChange={handleLastName} value={lastName} placeholder="Last name" />
        <Button text={"Cadastrar Gamer"} />
      </form>
    );
}

// Form.PropTypes = {
//   handleSaveUser: PropTypes.func.isRequired
// }


export default Form;
