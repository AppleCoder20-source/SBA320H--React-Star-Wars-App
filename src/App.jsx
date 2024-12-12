import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import getAllStarships from './services/sw-api'
import GetShips from './components/StarshipCards'
import './App.css'

function App() {
  const [ship, setShip] = useState(null);
  const [shipData, setShipData] = useState([]);


  return (
    <>
      <GetShips Starship = {ship}/>
    </>
  )
}

export default App
