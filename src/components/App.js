import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(r => r.json())
    .then(data => setToys(data))


  }, [])

  function addNewToy(newToy) {
    setToys([...toys, newToy])
  }

  function donateToy(donatedToy) {
    const updatedToys = toys.filter((toy) =>
      toy.id !== donatedToy.id ? toy : null
    )
    setToys(updatedToys)
  }

  function updateLikes(likeToy) {
    const updatedToys = toys.map((toy) => 
      toy.id === likeToy.id ? likeToy : toy
    )
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} donateToy={donateToy} updateLikes={updateLikes} />
    </>
  );
}

export default App;
