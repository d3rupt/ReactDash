import React from 'react'
import './Leaves.css'
export default class Leaves extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        isLoading: true
      })
    }, 60000)
  }

  render() {
    return(
      <div className="leavesContainer">
      {this.state.isLoading ?
          <><div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div>
          <div className="leafContainer"><div className="leaf" /></div></>
         : null}</div>
    )
  }
}
