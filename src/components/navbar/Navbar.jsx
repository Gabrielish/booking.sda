import "./navbar.css"
import React from "react"

const Navbar = () => {
  return <div className='navbar'>
    <div className="navContainer">
      
      <h3><a href="/" className="logo">Booking.sda</a></h3>
      <div className="navItems">
        <button className="navButton">Inregistrare</button>
        <button className="navButton">Autentificare</button>
      </div>
    </div>
  </div>
}

export default Navbar
