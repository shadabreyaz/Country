import React from 'react'

export default function HomeLoading() {
  return (
    <>
        {Array.from({length:20}).map((el,i)=>{
            return  <div key={i} className='loading-card'>
                  <div className="country-img"></div>
                  <div className="loading-country-detail">
                      <div className="loading-name"></div>
                      <p></p>
                      <p></p>
                      <p></p>
                  </div>
            </div>
        })
        }
   </>
  )
}
