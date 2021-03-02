import React, { useState } from "react"
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({arrayPlant, onNewPlant, setarrayPlant}) {
  const [search, setsearch] = useState("")

  let filterPlants = arrayPlant.filter((plant) => {return plant.name.toLowerCase().includes(search.toLowerCase())})

function handlePlantDelete(id) {
  let updatedPlant = arrayPlant.filter((plant) => plant.id !== id)
  setarrayPlant(updatedPlant)
}
  return (
    <main>
      <NewPlantForm onNewPlant={onNewPlant}/>
      <Search search={search} onSetSearch={setsearch}/>
      <PlantList arrayPlant={filterPlants} onPlantDelete={handlePlantDelete}/>
    </main>
  );
}

export default PlantPage;
