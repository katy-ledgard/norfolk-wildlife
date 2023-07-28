import { useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header/Header";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allAnimals, setAllAnimals] = useState("");

  function handleSearch(event) {
    // console.log("working")
    setSearchQuery(event.target.value);
    // console.log(searchQuery)
  }

  async function getAnimals(event) {
    const API = "http://localhost:8082/animal";
    const res = await axios.get(API);
    // const animals = res.map((animal)=> {
    // return (
    //   animal.name
    // )}
    // )
    console.log(res.data);

    setAllAnimals(res.data);
  }

  function hideAnimals(event) {
    setAllAnimals(!allAnimals);
  }

  return (
    <div className="App">
      <Header />
      <button className="get-btn" onClick={getAnimals}>
        Get all animals
      </button>
      {allAnimals && (
        <button onClick={hideAnimals} className="hide-btn">
          Hide Animals
        </button>
      )}
      {allAnimals &&
        allAnimals.map((animal) => {
          return (
            <div className="animal-container">
              <h2>{animal.name}</h2>
              <img src={animal.image_url} alt={animal.name} />
              <p>{animal.description}</p>
              <p>
                <span className="bold">Species:</span> {animal.species}
              </p>
              <p>
                <span className="bold">Habitat: </span>
                {animal.habitat}
              </p>
            </div>
          );
        })}

      <h2>Find an animal by Habitat</h2>

      <input type="text" placeholder="search habitat" onChange={handleSearch} />
      
    </div>
  );
}

export default App;
