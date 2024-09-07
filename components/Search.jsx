import { useContext } from 'react'
import searchLight from '../assests/magnifying-glass-solid.svg'
import searchDark from '../assests/magnifying-glass-solid (1).svg'
import { theme } from '../context/Theme'

export default function Search({setQuery}) {
    const[isDark] = useContext(theme)
    return (
            <div className="search-container">
                <img className="search-icon" src={(isDark)? searchDark:searchLight} alt="search-icon" />
                <input type="text" placeholder="Search for a country" onChange={(e)=>{
                   setQuery(e.target.value.toLowerCase())
                }} />
            </div>
    )
}
