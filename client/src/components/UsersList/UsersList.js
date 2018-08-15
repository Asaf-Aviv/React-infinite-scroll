import React from 'react'
import UserCard from '../UserCard/UserCard'
import PropTypes from 'prop-types'

const UsersList = props => {
  const { usersList, filteredUsername } = props
  const filteredGender = props.filteredGender === 'all' ? '' : props.filteredGender

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

UsersList.propTypes = {
  usersList: PropTypes.array.isRequired,
  filteredGender: PropTypes.string.isRequired,
  filteredUsername: PropTypes.string.isRequired
}

export default UsersList
