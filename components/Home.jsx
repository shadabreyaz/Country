import { useContext, useState } from 'react'
import CountryList from './CountryList'
import Filter from './Filter'
import Search from './Search'
import { theme } from '../context/Theme'

export default function Home() {
const[query,setQuery]=useState('')
const[isDark]=useContext(theme)
  return (
    <>
    <main className={(isDark)?'dark':''}>
      <div className="search-filter-container">
       <Search setQuery={setQuery} />
       <Filter setQuery={setQuery} />
      </div>
      <div className="country-container">
        <CountryList query={query} />
      </div>
    </main>
    
    </>
  )
}
