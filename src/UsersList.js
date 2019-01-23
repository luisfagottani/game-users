import React, {Component} from 'react';
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

export default UsersList;
