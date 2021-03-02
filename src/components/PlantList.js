import React, { useState } from "react"
import PlantCard from "./PlantCard";

function PlantList({arrayPlant, onPlantDelete}) {
  let allPlants = arrayPlant.map((plant) => <PlantCard key={plant.id} plant={plant} onPlantDelete={onPlantDelete}/>)
  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
