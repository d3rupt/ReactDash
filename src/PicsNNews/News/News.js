import React, {useState, useEffect} from 'react'
import Headline from './Headline'

import ('./News.css')

export default function News() {
  const [newsJson, getNewsJson] = useState(null);
  const [headlines, getHeadlines] = useState(false);
  const [shownHeadlines, getShownHeadlines] = useState([])
  const [visible, setVisible] = useState(false)
  const [animConsts, setAnimConsts] = useState({interval: 3,indexes: [0, 1, 2], timeout: 250})
  const [newsInit, isNewsInit] = useState(false);

  useEffect(() => {
    if (shownHeadlines) {
      const interval = setInterval(() => {
        if (shownHeadlines.length >= 3) {
          console.log(shownHeadlines.length)
          const shl = shownHeadlines
          shl.shift()
          animConsts.indexes.forEach(i => {
            setTimeout(() => {
              document?.getElementById(`headline${i}`)?.classList.add('opacity0')
              if (i == 2) {
                setTimeout(() => {
                  getShownHeadlines([...shl])
                }, 1100)
                animConsts.indexes.forEach(i => {
                  setTimeout(() => {
                    setTimeout(() => {
                      document?.getElementById(`headline${i}`)?.classList.remove('opacity0')
                    }, 200 * (i+1))
                  }, 1200)
                })
              }
            }, 200 * (i+1))
          })
        } else {
          clearInterval(interval)
          GetNews()
        }
      }, 20 * 1000)
      if (interval) {
        return
      }
    }
  }, [headlines])

  const GetNews = () => {
    fetch('https://old.reddit.com/user/news-bot-dash/m/news/top.json')
    .then(res => res.json())
    .then(async(newsLinks) => {
      let posts = [...newsLinks.data.children];
      console.log('GETNEWS')
      console.log(posts)
      getShownHeadlines(posts)
      getHeadlines(true)
    })
  }

    return(
      <div className="news">
      {shownHeadlines?.slice(0,3).map((headline, index) => {
        return <Headline id={`headline${index}`} title={headline.data.title} subreddit={headline.data.subreddit_name_prefixed} thumbnail={headline.data.thumbnail} />
      })}
      </div>
    )
}
