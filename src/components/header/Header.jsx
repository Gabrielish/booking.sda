import "./header.css"
import React, { useState } from "react"
import { DateRange } from "react-date-range"
import * as locales from "react-date-range/dist/locale"
import { Calendar } from "react-date-range"
import { format } from "date-fns"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBed,
  faCar,
  faFerry,
  faPlane,
  faTaxi,
  faCalendarDays,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { useNavigate } from "react-router-dom"

const Header = ({ type }) => {
  const nameMapper = {
    ro: "Romanian",
  }

  const localeOptions = Object.keys(locales)
    .map(key => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ""}`,
    }))
    .filter(item => nameMapper[item.value])

  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [locale, setLocale] = React.useState("ro")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ])

  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } })
  }

  return (
    <div className='header'>
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Sejururi</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Zboruri</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Inchirieri auto</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faFerry} />
            <span>Atractii</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi aeroport</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className='headerTitle'>Gasiti urmatorul sejur</h1>
            <p className='headerDesc'>
              Gasiti oferte la hoteluri, locuinte si multe altele...
            </p>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input
                  type='text'
                  placeholder='Unde mergeti?'
                  className='headerSearchInput'
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className='sBorder'></div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className='headerSearchText'
                >{`${format(date[0].startDate, "dd/MM")} - ${format(
                  date[0].endDate,
                  "dd/MM"
                )}`}</span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    locale={locales[locale]}
                    className='date'
                  />
                )}
              </div>
              <div className='sBorder'></div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className='headerSearchText'
                >{`${options.adult} adult · ${options.children} copii · ${options.room} camera`}</span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>Adult</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.adult <= 1}
                          className='optionCounterButton'
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.adult}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Copil</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.children <= 0}
                          className='optionCounterButton'
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.children}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Camera</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.room <= 1}
                          className='optionCounterButton'
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.room}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='sBorder'></div>
              <div className='headerSearchItem'>
                <button className='headerBtn' onClick={handleSearch}>
                  Cautare 
                  <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
