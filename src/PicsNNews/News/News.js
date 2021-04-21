import React from 'react'
import Headline from './Headline'

import ('./News.css')

export default class News extends React.Component {
  constructor(props) {
    super(props)
    this.GetNews = this.GetNews.bind(this)
    this.ShuffleNews = this.ShuffleNews.bind(this)

    this.state = {
      newsJson: null,
      headlines: null,
      shownHeadlines: null
    }
  }
  GetNews() {
    fetch('https://old.reddit.com/user/news-bot-dash/m/news/top.json')
    .then(res => res.json())
    .then(newsLinks => {
      let posts = [...newsLinks.data.children.slice(0,24)];
      this.setState({
        headlines: posts
    })
  })
}

ShuffleNews() {
  let posts = [...this.state.headlines]
  if (this.state.headlines.length >= 3) {
    this.setState({
      headlines: posts.slice(3,)
      })
    } else {
      this.GetNews()
    }
}

  /*componentDidUpdate(prevState) {
    if (this.state.headlines !== prevState.headlines) {
    //setTimeout(this.ShuffleNews, 6000 * 10)
    setTimeout(this.ShuffleNews, 600 * 10)
    }
  }*/
  componentDidUpdate() {

  }
  componentDidMount() {
    this.GetNews()
    setInterval(this.ShuffleNews, 60000 * 5)
  }

  render() {
    return(
      <div className="news">
      {this.state.headlines != null ? this.state.headlines.slice(0,3).map(headline => {
        return <Headline title={headline.data.title} subreddit={headline.data.subreddit_name_prefixed} thumbnail={headline.data.thumbnail} />
      }) : null}
      </div>
    )
  }
}
/**/
