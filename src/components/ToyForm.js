import React, { useState } from "react";

function ToyForm({ addNewToy }) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newToy => addNewToy(newToy))

    setFormData({
      name: "",
      image: "",
      likes: 0
    })

    }


  

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={(e) => setFormData({...formData, image: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
