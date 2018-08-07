import React, { Component } from 'react'
import UserCard from '../UserCard/UserCard'
import PropTypes from 'prop-types'

export default class UsersList extends Component {
  static propTypes = {
    usersList: PropTypes.array.isRequired,
    filteredGender: PropTypes.string.isRequired,
    filteredUsername: PropTypes.string.isRequired
  }

  render() {
    const { usersList, filteredUsername } = this.props
    const filteredGender = this.props.filteredGender === 'all' ? '' : this.props.filteredGender

    return (
      <div className="users-list">
        <ul>
          {usersList.map(user => 
            <UserCard 
              key={user.login.uuid}
              user={user}
              display={user.login.username.includes(filteredUsername) && (filteredGender ? user.gender === filteredGender : true)} 
            />
          )}
        </ul>
      </div>
    )
  }
}
