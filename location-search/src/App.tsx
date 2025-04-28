import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LocationSearch from './components/LocationSearch'
import Map from './components/Map'
import viteLogo from '/vite.svg'
import { Place } from './api/place'
// import './App.css'

function App() {
  const [place, setPlace] = useState<Place|null>(null)
  return (
    <>
      <div className='h-screen w-screen grid grid-cols-12'>
        <div className='col-span-3 p-2'>

          <LocationSearch />
        </div>
        <div className='col-span-9'>

          <Map place={place} />
        </div>

      </div>
    </>
  )
}

export default App
