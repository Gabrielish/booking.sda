import React from "react"
import "./mailList.css"

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Economisiti timp si bani!</h1>
      <span className="mailDesc">Abonati-va si va vom trimite cele mai bune oferte</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="E-mailul dvs." />
        <button>Abonare</button>
      </div>
    </div>
  )
}

export default MailList
