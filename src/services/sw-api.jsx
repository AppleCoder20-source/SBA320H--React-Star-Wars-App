import { useState } from "react";
export default async  function getAllStarships(){
    try{
        const response = await fetch("https://swapi.dev/api/starships/"          
        );
        const data = await response.json()
        return data
    } catch (e) {
        console.error('Error has occurred, try again for starships:', e);
        return null;
    }
}