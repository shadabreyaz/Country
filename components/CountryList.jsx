import { useEffect, useState } from 'react'
import Countrycard from './Countrycard'
import HomeLoading from './HomeLoading'

export default function CountryList({query}) {
    const[countrydata,setCountryData]=useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .then((data)=>setCountryData(data))
    },[])
  return (
    <>
    {(!countrydata.length)? <HomeLoading /> :  
     countrydata.filter((country)=>{
     return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
    }).map((country)=>{
      return <Countrycard 
      key={country.name.common}
      countryname={country.name.common}
       flag={country.flags.svg}
        population={country.population.toLocaleString('en-IN')}
         region={country.region}
          capital={country.capital}
          data={country}
         />
        
    })}
   
    </>
   
  )
}
