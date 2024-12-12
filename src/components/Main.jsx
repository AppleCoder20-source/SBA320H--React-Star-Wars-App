import { useState, useEffect } from 'react';
import getAllStarships from '../services/sw-api';
import GetShips from '../components/StarshipCards';
import '../App.css';
import '../index.css'

export default function Main() {
  const [battleship, setShip] = useState([]);

    async function fetchShipData() {
      const data = await getAllStarships();
      setShip(data.results); 
    }
useEffect(() => {
    fetchShipData();
  }, []);
  return (
    <div>
        <h1> Star Wars Theme</h1>
      {battleship.map((singleShip, index) => (
        <GetShips key={index} ship={singleShip} />
      ))}
      <h1>Loading...</h1>
    </div>
  );
}

  