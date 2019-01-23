import React from 'react';

const Button = (props) => {
    return (
      <button onClick={props.userAction} disabled={props.isDisabled}>{props.text}</button>
    );
}

export default Button;
