import React from 'react'
import PropTypes from 'prop-types'

const UserCard = ({ user, display }) => (
  <div className={`user-card shadow silent-border ${display ? 'show' : 'hide'}`}>
    <div className="user-image">
      <img src={user.picture.large} alt={`${user.login.username} thumbnail`} />
    </div>
    <div className="user-body">
      <div className="user-title">
        <h1 className="title-text">{user.login.username}</h1>
      </div>
      <div className="user-info">
        <h2 className="title-text">{user.name.first} {user.name.last}</h2>
        <p><strong>Gender: </strong>{user.gender[0].toUpperCase() + user.gender.slice(1)}</p>
        <p><strong>Age: </strong>{user.dob.age}</p>
        <p><strong>Email: </strong>{user.email}</p>
        <p><strong>Location: </strong>{user.location.state}, {user.location.city}, {user.location.street}</p>
      </div>
    </div>
  </div>
)

UserCard.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserCard
