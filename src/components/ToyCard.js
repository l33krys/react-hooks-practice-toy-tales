import React from "react";

function ToyCard({ toy, donateToy, updateLikes }) {

  const {name, image, likes} = toy;

  function handleDonateClick(e) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(donateToy(toy))

  }

  function handleLikeClick(e) {
    const toyObjLikes = {
      // name: name,
      // image: image,
      likes: toy.likes + 1
    }
    
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(toyObjLikes)
    })
    .then(r => r.json())
    .then(updatedToy => updateLikes(updatedToy))
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={(e) => handleLikeClick(e)}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
