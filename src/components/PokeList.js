import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const PokeItems = props.list.map((item, id) => {
    return (
      <li key={id}>
        <Pokemon name={item.name} url={item.url} types={item.types} />
      </li>
    );
  });
  return <ul className="list">{PokeItems}</ul>;
};

export default PokeList;
