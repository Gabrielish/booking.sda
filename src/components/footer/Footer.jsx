import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='fLists'>
        <ul className="fList">
            <li className="fListItem">Tari</li>
            <li className="fListItem">Regiuni</li>
            <li className="fListItem">Orase</li>
            <li className="fListItem">Districte</li>
            <li className="fListItem">Aeroporturi</li>
            <li className="fListItem">Hoteluri</li>
            <li className="fListItem">Puncte de atractie</li>
        </ul>
        <ul className="fList">
            <li className="fListItem">Locuinte</li>
            <li className="fListItem">Apartamente</li>
            <li className="fListItem">Complexuri</li>
            <li className="fListItem">Vile</li>
            <li className="fListItem">Hosteluri</li>
            <li className="fListItem">B&B</li>
            <li className="fListItem">Pensiuni</li>
        </ul>
        <ul className="fList">
            <li className="fListItem">Cazari unice</li>
            <li className="fListItem">Toate destinatiile</li>
            <li className="fListItem">Descoperiti destinatii</li>
            <li className="fListItem">Evaluari</li>
            <li className="fListItem">Oferte sezoniere si festive</li>
        </ul>
        <ul className="fList">
            <li className="fListItem">Inchirieri auto</li>
            <li className="fListItem">Gasiti curse aeriene</li>
            <li className="fListItem">Rezervari la restaurant</li>
            <li className="fListItem">Booking pentru Agenti de calatorie</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Booking.sda. Toate drepturile rezervate.</div>
    </div>
  )
}

export default Footer
