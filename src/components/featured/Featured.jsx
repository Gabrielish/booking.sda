import React from "react"
import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/square250/674442.webp?k=5299f1c84ab32695ac852fa18989e8ef22625dec150280249eca0360d93e507f&o='
          alt='Crisan'
          className="featuredImg"
        />
        <div className='featuredTitles'>
            <h1>Mamaia</h1>
            <p>1037 proprietati</p>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/square250/691198.webp?k=34272dd072c7ab828d55d03d34b90d34aed0fae049c057f2c37bb4d735c8e093&o='
          alt='Crisan'
          className="featuredImg"
        />
        <div className='featuredTitles'>
            <h1>Eforie Nord</h1>
            <p>350 proprietati</p>
        </div>
      </div>
      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/square250/691404.webp?k=1218e9e4a1792a4409ef0a8184935096be0962c06b788475c5a39ff15a90ed38&o='
          alt='Crisan'
          className="featuredImg"
        />
        <div className='featuredTitles'>
            <h1>Neptun</h1>
            <p>62 proprietati</p>
        </div>
      </div>
    </div>
  )
}

export default Featured
