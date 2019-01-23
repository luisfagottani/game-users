import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User'
class UsersList extends Component {

  render() {
    const {userList, showGames} = this.props;
    return (
      <ul>
        {Object.values(userList).map(user  => (
          <User
          key={user['userName']}
          showNumberOfGames={showGames}
          userName={user['userName']}
          lastName={user['lastName']}
          firstName={user['firstName']}
          numberOfGamesPlayed={user['gamesPlayed']}/>
        ))}
      </ul>
    );
  }
}

UsersList.propTypes = {
  user: PropTypes.object,
  showGames: PropTypes.bool.isRequired,
};

export default UsersList;
