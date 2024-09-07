import React from 'react'

export default function Filter({setQuery}) {
  return (
    <div className="select-container">
    <select name="" id="" onChange={(e)=>{
                   setQuery(e.target.value.toLowerCase())
        }}>
       <option hidden>Filter by Region</option>
       <option value="Africa">Africa</option>
       <option value="Americas">Americas</option>
       <option value="Asia">Asia</option>
       <option value="Europe">Europe</option>
       <option value="Oceania">Oceania</option>
    </select>
 </div>
  )
}
