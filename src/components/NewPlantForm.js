import React, { useEffect, useState } from "react";

function NewPlantForm({onNewPlant}) {
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [price, setprice] = useState("")

  function handleOnSubmit(e){
    e.preventDefault()
    const formData = {name, image, price }
   
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((formData) => {
        onNewPlant(formData);
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name"  value={name}
          onChange={(e) => setname(e.target.value)} placeholder="Plant name" />
        <input type="text" name="image" value={image}
          onChange={(e) => setimage(e.target.value)} placeholder="Image URL" />
        <input type="number" name="price" value={price}
          onChange={(e) => setprice(e.target.value)} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
