import React from "react"
import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o='
          alt=''
          className="fpImg"
        />
        <span className='fpName'>Sugar Loft Apartments</span>
        <span className='fpCity'>Rio de Janeiro</span>
        <span className='fpPrice'>Incepand de la 242 lei</span>
        <div className='fpRating'>
          <button>9,1</button>
          <span>Superb</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o='
          alt=''
          className="fpImg"
        />
        <span className='fpName'>The Apartments by The Sloane Club</span>
        <span className='fpCity'>Londra</span>
        <span className='fpPrice'>Incepand de la 1.819 lei</span>
        <div className='fpRating'>
          <button>9,3</button>
          <span>Superb</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/90327438.jpg?k=c685ade6f4cfb9f0577e4508bcc9f5262d57775452af7997822f0d84b373afc1&o='
          alt=''
          className="fpImg"
        />
        <span className='fpName'>Urbana Hipster Downtown Budapest</span>
        <span className='fpCity'>Budapesta</span>
        <span className='fpPrice'>Incepand de la 830 lei</span>
        <div className='fpRating'>
          <button>9,5</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/hotel/max500/98934908.jpg?k=5a652f4e5bbd201df5f67cb59cb90eb31e4ad578226c3c87e280544906b587b8&o='
          alt=''
          className="fpImg"
        />
        <span className='fpName'>Lake View Apartment Amsterdam</span>
        <span className='fpCity'>Amsterdam</span>
        <span className='fpPrice'>Incepand de la 5.158 lei</span>
        <div className='fpRating'>
          <button>9,3</button>
          <span>Superb</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
