import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/App.css";

const PokeList = (props) => {
  const PokeItems = props.list.map((item, id) => {
    return (
      <li key={id} className="liItem">
        <Pokemon name={item.name} url={item.url} types={item.types} />
      </li>
    );
  });
  return <ul className="list">{PokeItems}</ul>;
};

export default PokeList;
