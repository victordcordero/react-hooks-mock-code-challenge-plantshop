import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


function App() {
  const [arrayPlant, setarrayPlant] = useState([])
    
    useEffect(() => {
      fetch("http://localhost:6001/plants")
        .then((r) => r.json())
        .then((data) => {
          setarrayPlant(data);
        });
    }, []);
  
    function handleNewPlant(newPlant) {
      console.log(newPlant)
      setarrayPlant([...arrayPlant, newPlant])
    }

  return (
    <div className="app">
      <Header />
      <PlantPage arrayPlant={arrayPlant} onNewPlant={handleNewPlant} setarrayPlant={setarrayPlant}/>
    </div>
  );
}

export default App;
