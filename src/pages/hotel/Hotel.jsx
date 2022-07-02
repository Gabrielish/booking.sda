import React, { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons"

import "./hotel.css"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"

const Hotel = () => {
  const [sliderNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(0)

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362605667.jpg?k=d8549a1bbfb30e22a4ce196d103fa3a9b7d42e914452d614ddc5735904386b00&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362605705.jpg?k=f69dfee7205a3b2bc57b45c620aeb2c123091b21ebaed2953356cd51e920a702&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362605711.jpg?k=a1c28fcdff2b29d58b0cbf5eb70089dd735f1bf17a78682ab6c53122055c3959&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362605734.jpg?k=086ba2c40a8ff47d3cd9cce7c55c9093e5b376734141af3b26cc111e88fa01bf&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362605798.jpg?k=6e9803c4ceb1a842174ce209676e3b6bf89f873b24d80b9d3896a9647f5c8006&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/362607188.jpg?k=4bcc3889cbfe127b3dfa466c9c1ef6babf4bb5ea0e6fa1d6a09a60c094cdea2c&o=&hp=1",
    },
  ]

  const handleOpen = i => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = direction => {
    let newSlideNumber
    if (direction === "l") {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='close'
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className='arrow'
              onClick={() => handleMove("l")}
            />
            <div className='sliderWrapper'>
              <img
                src={photos[sliderNumber].src}
                alt=''
                className='sliderImg'
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='arrow'
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Rezervati acum</button>
          <h1 className='hotelTitle'>Premium Design Central Suite</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>St.Frederick, Valletta, Malta </span>
          </div>
          <span className='hotelDistance'>
            Locatie excelenta - 500m de centru
          </span>
          <span className='hotelPriceHighlight'>
            Rezervati sejurul in apartament
          </span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=''
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='hotelTitle'>Premium Design Central Suite</h1>
              <p className='hotelDesc'>
                Introducing you to our exclusive Maltese apartments collection
                in the hear of Valletta. This city is truly exceptional with its
                history and is a site of UNESCO heritage! Our luxurious and
                unique apartments with its mixture of contemporary and authentic
                design will not leave you indifferent. Completely new, spacious
                and lush - we know how to make your trip to Malta unforgettable!
                These boutique style apartments are fully equipped, including
                linens, towels, complementary amenities and there is also
                self-catering possibility within apartments’ fully equipped
                kitchens. The location is on point, too - just 2 minutes away
                from the city centre! We are looking forward to meet you on
                Malta and make your vacation dreams come true!
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect pentru un sejur de 7 nopti!</h1>
              <span>
                Locatie de top: evaluata la superlativ de clientii recenti (9,8)
              </span>
              <h2>
                <b>2200 Lei</b> (7 nopti)
              </h2>
              <button>Rezervati acum</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
