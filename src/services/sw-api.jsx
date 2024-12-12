import { useState } from "react";
export default async  function getAllStarships(){
    const [newdata, setData] = newState(null)
    try{
        const response = await fetch("https://swapi.dev/api/starships/"          
        );
        const data = response.json()
        return data
    } catch (e) {
        console.error('Error has occurred, try again for starships:', e);
    }
}