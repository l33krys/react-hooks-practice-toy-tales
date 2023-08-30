import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donateToy, updateLikes }) {


const toysToDisplay = toys.map((toy) => (
  <ToyCard key={toy.id} toy={toy} donateToy={donateToy} updateLikes={updateLikes} />

))



  return (
    <div id="toy-collection">{toysToDisplay}</div>
  );
}

export default ToyContainer;
