import React from "react"
import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        className='siImg'
        src='https://t-cf.bstatic.com/xdata/images/hotel/square200/362605667.webp?k=e1b274ea8de66520d2ea267231fa96da7e8a86308157fa1cd595133871275a6c&o=&s=1'
        alt='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>Premium Design Central Suite</h1>
        <span className='siDistance'>500m de centru</span>
        <span className='siBreakfast'>Mic dejun inclus</span>
        <span className='siSubtitle'>
          Camera dubla cu balcon si transfer de la/la aeroport inclus
        </span>
        <span className='siFeatures'>
          Apartament intreg • 1 dormitor • 1 living • 1 baie • 1 bucatarie •
          45m²
        </span>
        <span className='siCancelOp'>Anulare gratuita</span>
        <span className='siCancelOpSubtitle'>
          Puteti anula mai tarziu, deci securizati-va acest pret excelent
          astazi.
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
            <span>Excelent</span>
            <button>8,9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">800 Lei</span>
            <span className="siTaxOp">Include taxe si costuri</span>
            <button className="siCheckButton">Vedeti disponibilitatile</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
