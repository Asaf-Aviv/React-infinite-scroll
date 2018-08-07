import React, { Component } from 'react'
import UsersList from './components/UsersList/UsersList'
import Filters from './components/Filters/Filters'
import throttle from 'lodash.throttle'

import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      pagination: 1,
      usersList: [],
      filteredGender: 'all',
      filteredUsername: '',
      loading: false
    }
    this.handleScroll = throttle(this.handleScroll, 300)
  }

  componentDidMount = () => {
    document.addEventListener('scroll', this.handleScroll)
    this.fetchUsers(this.state.pagination)
  }

  componentWillUnmount = () => {
    document.removeEventListener('scroll', this.handleScroll)
  }

  fetchUsers = async pagination => {
    this.setState({ loading: true })

    const res = await fetch(`https://randomuser.me/api/?page=${pagination}&results=20&nat=US&inc=gender,name,location,email,login,picture,dob&seed=beans`)
    const parseRes = await res.json()

    this.setState(prevState => ({
      pagination: parseRes.info.page,
      usersList: [...prevState.usersList, ...parseRes.results],
      loading: false
    }))
  }

  handleScroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 550) {
      if (!this.state.loading) {
        this.fetchUsers(this.state.pagination + 1)
      }
    }
  }

  filterByGender = filteredGender => {
    this.setState({ filteredGender })
  }

  filterByUsername = filteredUsername => {
    this.setState({ filteredUsername })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Filters filterByGender={this.filterByGender} filterByUsername={this.filterByUsername} />
          <UsersList {...this.state} />
        </div>
      </div>
    )
  }
}
