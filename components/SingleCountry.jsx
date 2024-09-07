import React, { useContext, useEffect, useState } from 'react'
import leftarrow from "../assests/arrow-left-solid.svg"
import { Link, useLocation, useParams } from 'react-router-dom'

import SingleLoading from './SingleLoading'
import "./SingleCountry.css"
import { theme } from '../context/Theme'

export default function SingleCountry() {
 const param = useParams()
 const SingleCountryname = param.country

 const[singlecountrydata,setSinglecountrydata] = useState(null)
 const[notfound,setNotfound] = useState(false)

 const{state} = useLocation()
//  console.log(state);

function fetchupdator(country){
  setSinglecountrydata({
    name:country.name.common,
    flag:country.flags.svg,
    nativename:(country.name.nativeName)?Object.values(country.name.nativeName)[0].official:'No Native Name',
    population:country.population.toLocaleString('en-IN'),
    region:country.region,
    sub:country.subregion,
    cap:country.capital,
    tld:country.tld.join(', '),
   lan:Object.values(country.languages || {}).join(', '),
    // curr:Object.values(country.currencies)[0].name,
    curr:(country.currencies)?Object.values(country.currencies)[0].name:'No Official Currency',
    borders:[]
})
if(!country.borders){
  country.borders=[]
 }
Promise.all(country.borders.map((border)=>{
  return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
   .then((res)=>{ return res.json()})
   .then(([bordercountry]) => bordercountry.name.common
   )
})).then((borders)=>{
setSinglecountrydata((prevState)=>({...prevState,borders}))
})

}


 useEffect(()=>{  
   if(state){
    fetchupdator(state)
    return
   }
   fetch(`https://restcountries.com/v3.1/name/${SingleCountryname}?fullText=true`)
   .then((res)=>{ return res.json()})
   .then(([country])=>{                  //destructing
    fetchupdator(country)
   })
   .catch((err)=>{
     setNotfound(true)
   })     
 },[SingleCountryname])    
  
if(notfound){
return <div style={{textAlign:'center'}}><h1 style={{marginTop:'20px'}}>Country not Found</h1></div>
}
const[isDark] = useContext(theme)
  return (
     singlecountrydata === null? (<SingleLoading />) :( 
     <main className={`${(isDark)?'dark':''}`}>
      <div className="single-country-container">
        <span onClick={()=>{
          history.back()
        }} className="btn"><img className="btn-img" src={leftarrow} alt="leftarrow"/>Back</span>
        <div className="single-country-flag">
          <div className="single-country-img">
          <img src={singlecountrydata.flag} alt="flag"/>
          </div>
          <div className="single-country-detail">
              <h2>{singlecountrydata.name}</h2>
              <div className="more-details">
                  <div>
                        <p><b>Native Name: </b><span>{singlecountrydata.nativename}</span></p>
                        <p><b>Population: </b><span>{singlecountrydata.population}</span></p>
                        <p><b>Region: </b><span>{singlecountrydata.region}</span></p>
                        <p><b>Sub Region: </b><span>{singlecountrydata.sub}</span></p>
                        <p><b>Capital: </b><span>{singlecountrydata.cap}</span></p>
                  </div>
                  <div>
                      <p><b>Top Level Domain: </b><span>{singlecountrydata.tld}</span></p> 
                      <p><b>Currencies: </b><span>{singlecountrydata.curr}</span></p> 
                      <p><b>Languages: </b><span>{singlecountrydata.lan}</span></p> 
                  </div>
              </div>
              {/* <div className="border-countries">
               <b>Border Countries:</b>
               {
               (singlecountrydata.borders.length == 0)?'No Borders':
               singlecountrydata.borders.map((border)=>{
                return <Link key={border} to={`/${border}`} >{border}</Link>
                })
               }
              </div> */}
               {singlecountrydata.borders.length != 0 && <div className="border-countries">
               <b>Border Countries:</b>
               {singlecountrydata.borders.map((border)=>{
                return <Link key={border} to={`/${border}`} >{border}</Link>
                })
               }
              </div>}
          </div>
        </div>
       </div>
  </main>)
       
  )
}
