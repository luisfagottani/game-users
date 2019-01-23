import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
      <button onClick={props.userAction} disabled={props.isDisabled}>{props.text}</button>
    );
}

Button.propTypes = {
  userAction: PropTypes.func,
  disabled: PropTypes.func,
  text: PropTypes.string
};

export default Button;
