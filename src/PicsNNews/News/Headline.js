import React from 'react'
import './Headline.css'
import thumbnail from './thumbnail.jpg'

export default class Headline extends React.Component {
  constructor(props) {
    super(props)
    this.ImageChecker = this.ImageChecker.bind(this)
  }

  ImageChecker() {
    console.log(thumbnail)
    if (this.props.thumbnail == 'self') {
      return <div className="nothumb" />
    } else if (this.props.thumbnail == 'default') {
      return <div className="nothumb" />
    } else {
      return <div className="thumbContainer" style={{backgroundImage: `url('${this.props.thumbnail}')`}}></div>

    }
  }
  componentDidMount() {
  }
  render() {
    return(
      <div className="newsHeadline">
        <div className="headline">
          <div className="nameSubreddit"><p>{this.props.title.length > 105 ? `${this.props.title.substring(0,105)}...` : this.props.title}</p></div>
          <div className="headlineSubreddit"><p>{this.props.subreddit}</p></div>
        </div>
        <div className="newsThumbnail">{this.ImageChecker()}</div>
      </div>
    )
  }
}
