import React from 'react';
import PropTypes from 'prop-type';

const Button = (props) => {
    return (
      <button onClick={props.userAction} disabled={props.isDisabled}>{props.text}</button>
    );
}

export default Button;
