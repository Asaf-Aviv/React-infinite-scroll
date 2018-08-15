import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import searchIcon from '../../search.svg'

function createRadioInput(name, value, fn, checkedValue) {
  return (
    <Fragment>
      <input 
        type="radio" 
        id={value}
        name={name} 
        value={value}
        onChange={fn}
        checked={checkedValue === value}
      />
      <label htmlFor={value}>{value[0].toUpperCase() + value.slice(1)}</label>
    </Fragment>
  )
}

export default class Filters extends Component {
  static propTypes = {
    filterByGender: PropTypes.func.isRequired,
    filterByUsername: PropTypes.func.isRequired
  }

  state = {
    checkedValue: 'all',
    inputText: ''
  }

  openSearchBox = () => {
    document.querySelector('.search-input > input').focus()
  }

  handleBlur = () => {
    const searchInput = document.querySelector('.search-input > input')
    searchInput.style.width = searchInput.value.length ? '250px' : '0';
  }

  setGenderValue = e => {
    this.setState({ checkedValue: e.target.value }, () => {
      this.props.filterByGender(this.state.checkedValue)
    })
  }

  setInputText = e => {
    this.setState({ inputText: e.target.value }, () => {
      this.props.filterByUsername(this.state.inputText)
    })
  }

  render() {
    return (
      <div className="filter-wrapper shadow">
        <div className="radio-inputs">
          {createRadioInput('gender', 'all', this.setGenderValue, this.state.checkedValue)}
          {createRadioInput('gender', 'male', this.setGenderValue, this.state.checkedValue)}
          {createRadioInput('gender', 'female', this.setGenderValue, this.state.checkedValue)}
        </div>
        <div className="search-input">
          <input
            type="text" 
            value={this.inputText}
            onChange={this.setInputText}
            onBlur={this.handleBlur}
            placeholder="Filter By Username"
          />
          <img onClick={this.openSearchBox} src={searchIcon} alt="search" />
        </div>
      </div>
    )
  }
}
