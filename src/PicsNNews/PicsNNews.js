import React from 'react'
import News from './News/News'
import Pics from './Pics/Pics'
import ('./PicsNNews.css')


export default class PicsNNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {

  }
  render() {
    return(
      <div className="picsNNews">
        <News key='news'/>
        <Pics key='pics' />
      </div>
    )
  }
}
//  {[vidOne, vidTwo, vidThree].includes(this.state.pic)? <video loop autoPlay muted src={this.state.pic} /> : <img src={this.state.pic} />}
