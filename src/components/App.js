import React from "react";
import "../stylesheets/App.css";
import data from "./data.json";
import PokeList from "./PokeList";

function App() {
  return (
    <>
      <h1 className="mainTitle">Mi lista de Pokemon</h1>

      <PokeList list={data} />
    </>
  );
}

export default App;
