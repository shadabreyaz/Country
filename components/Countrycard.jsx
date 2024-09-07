import React from 'react'
import { Link } from 'react-router-dom'

export default function Countrycard({flag,countryname,population,region,capital,data}) {
  return (
         <Link to={`./${countryname}`} className="country-card" state={data}> 
            <div className="country-img"><img src={flag} alt="flag"/></div>
            <div className="country-detail">
                <h2>{countryname}</h2>
                <p><b>Population: </b><span>{population}</span></p>
                <p><b>Region: </b><span>{region}</span></p>
                <p><b>Capital: </b><span>{capital}</span></p>
            </div>
         </Link>
  )
}