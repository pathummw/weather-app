import React ,{useEffect} from 'react'
import SearchBar from './SearchBar'

export default function Dashboard() {
    const API_key = '675fcfff307714a96aa30494fcb1aa0c';
    const lat = 12;
    const lon = 77;
    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    
      return () => {
        
      }
    }, [])
    
  return (
    <>
        <div>Hi Dashboard</div>
        <div className='search-bar'>
            <SearchBar />
        </div>
    </>
    
  )
}
