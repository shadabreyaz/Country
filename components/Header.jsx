import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import moon from "../assests/moon-regular.svg"
import sun from "../assests/sun-regular.svg"
import { theme } from "../context/Theme"


export default function Header() {
const[isDark,setIsDark] = useContext(theme)

    return (
        <header className={(isDark)?'dark':''}>
            <div className="header-container">
                <Link className="header-text" to={'/'}><h1>Where in the world?</h1></Link>
                <div className="header-image-container" onClick={()=>{
                    setIsDark(!isDark)
                    localStorage.setItem('Dark',!isDark)
                }}>
                    <div className="header-img"><img src={(isDark)? sun:moon} alt="moon" /></div>
                    <p>{(isDark)?'Light':'Dark'} Mode</p>
                </div>
            </div>
        </header>
    )
}
