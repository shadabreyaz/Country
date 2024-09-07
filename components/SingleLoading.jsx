import React from 'react'

export default function SingleLoading() {
    return (
        <main>
            <div className="single-country-container">
                <div className="single-country-flag">
                    <div className="loading"></div>
                    <div>
                        <div className="Heading"></div>
                        <div className="more-details">
                            <div>
                                {Array.from({ length: 5 }).map((el, i) => {
                                    return <div key={i} className='Heading-detail'></div>
                                })}
                            </div>
                            <div>
                                {Array.from({ length: 3 }).map((el, i) => {
                                    return <div key={i} className='Heading-detail'></div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
