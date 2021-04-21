import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {location: ""}
    //this.handleClick = this.handleClick.bind(this)
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({location: event.target.value})
  }
  handleClick = () => {
    console.log(this.state.location)
    this.props.weatherCallBack(this.state.location)

  }
  render() {
    return(
      <div className="searchBar">
        <input onChange={this.handleChange}type="text" name="title" />
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}

export default SearchBar
