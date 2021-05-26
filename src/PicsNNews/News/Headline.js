import React, {useEffect} from 'react'
import './Headline.css'
import thumbnail from './thumbnail.jpg'

export default function Headline({thumbnail, id, subreddit, title}) {
    /*useEffect(() => {
        alert(id)
    }, [])*/
  const ImageChecker = () => {
    if (thumbnail == 'self') {
      return <div className="nothumb" />
    } else if (thumbnail == 'default') {
      return <div className="nothumb" />
    } else {
      return <div className="thumbContainer" style={{backgroundImage: `url('${thumbnail}')`}}></div>

    }
  }
   return(
      <div id={id} className="newsHeadline">
        <div className="headline">
          <div className="nameSubreddit"><p>{title.length > 100 ? `${title.substring(0,100)}...` : title}</p></div>
          <div className="headlineSubreddit"><p>{subreddit}</p></div>
        </div>
        <div className="newsThumbnail">{ImageChecker()}</div>
      </div>
    )
}
