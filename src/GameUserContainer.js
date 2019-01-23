import React, {Component} from 'react';
import Form from './Form';
import UsersList from './UsersList';
import Button from './Button'


class GameUserContainer extends Component {
  state = {
    dataUsers: [],
    errorMsg: '',
    showGames: false
  };

  verifyIfUserExisit = (userName) => {
    const {dataUsers} = this.state;

    let existUser = dataUsers.filter((value) =>  (
      value['userName'] === userName)
    )

    if(existUser.length > 0){
      this.setState(oldState => ({
        errorMsg: 'Please, use another username'
      }));
      return true;

    }
    return false;
  }

  handleSaveUser = (event, user) => {
    event.preventDefault();
    if(this.verifyIfUserExisit(user.userName)){
      return false;
    }

    this.setState(oldState => ({
      dataUsers: [...oldState.dataUsers, user],
      errorMsg: ''
    }));
  }

  showUserGames = () => {
    this.setState(oldState => ({
      showGames: !oldState.showGames
    }));
  }

  dontExistUsers = () => (
    this.state.dataUsers.length === 0
  )

  render() {
    const {errorMsg, dataUsers, showGames} = this.state;
    return (
      <div>
      <Form handleSaveUser={this.handleSaveUser} errorMsg={errorMsg} />
      {!this.dontExistUsers() && (<Button userAction={this.showUserGames} text={showGames ? "Hide User Games" : "Show User Games"} />)}
      <UsersList userList={dataUsers} showGames={showGames} />
      </div>
    )
  }
}

export default GameUserContainer;
