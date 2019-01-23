import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {
  showNumberGames = () => {
    const {numberOfGamesPlayed, showNumberOfGames, userName} = this.props;
    if(showNumberOfGames){
      return `The ${userName} plays ${numberOfGamesPlayed} games`
    }else{
      return `The ${userName} plays ## games`
    }
  }
  render() {
    const {userName, firstName, lastName} = this.props;
    return (
      <li key={userName}>
        <p><strong>{firstName} {lastName}</strong></p>
        <p>{this.showNumberGames()} </p>
      </li>
    );
  }
}

User.propTypes = {
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  showNumberOfGames: PropTypes.bool.isRequired,
  numberOfGamesPlayed: PropTypes.number.isRequired
};

export default User;
