import React, { useState } from "react";

function PlantCard({plant, onPlantDelete}) {
  const [stock, setstock] = useState(true)

  function changeStock(){
    setstock((stock) => !stock)
    console.log(plant.id)
  }

  function onDeleteButton() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE" 
    })
    onPlantDelete(plant.id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={onDeleteButton}>Delete</button>
      {stock ? (
        <button onClick={changeStock} className="primary">In Stock</button>
      ) : (
        <button onClick={changeStock} >out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
{/* <button onClick={() => changeStock()}>
{stock ? "stock" : "out of stock"}
</button> */}