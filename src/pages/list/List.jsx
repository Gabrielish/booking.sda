import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./list.css"
import { format } from "date-fns"
import * as locales from "react-date-range/dist/locale"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {
  const nameMapper = {
    ro: "Romanian",
  }

  const localeOptions = Object.keys(locales)
    .map(key => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ""}`,
    }))
    .filter(item => nameMapper[item.value])

  const [locale, setLocale] = React.useState("ro")

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Cautare</h1>
            <div className='lsItem'>
              <label>Destinatie/numele proprietatii:</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='lsItem'>
              <label>Data Check-in/Check-out</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM"
              )} - ${format(date[0].endDate, "dd/MM")}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  locale={locales[locale]}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className='lsItem'>
              <label>Optiuni</label>
              <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Pret minim <small>pe noapte</small>
                  </span>
                  <input type='number' min={0} className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Pret maxim <small>pe noapte</small>
                  </span>
                  <input type='number' min={1} className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Adult</span>
                  <input
                    type='number'
                    min={1}
                    className='lsOptionInput'
                    placeholder={options.adult}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Copii</span>
                  <input
                    type='number'
                    min={0}
                    className='lsOptionInput'
                    placeholder={options.children}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Camera</span>
                  <input
                    type='number'
                    min={1}
                    className='lsOptionInput'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Cautare</button>
          </div>
          <div className='listResult'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
