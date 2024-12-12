import { useState, useEffect } from 'react';
import getAllStarships from '../services/sw-api';
import GetShips from '../components/StarshipCards';
import '../App.css';
import '../index.css'

export default function Main() {
  const [battleship, setShip] = useState([]);

    async function fetchShipData() {
      const data = await getAllStarships();
      console.log(data.results)
      setShip(data.results); 
    }
useEffect(() => {
    fetchShipData();
  }, []);
  if(battleship === null){
    return <h1> Loading...</h1>
  }
  return (
    <div>
        <h1> Star Wars Theme</h1>
      {battleship.map((StarShip) => (
        <GetShips key={StarShip.url} ship={StarShip} />
      ))}
    </div>
  );
}

  