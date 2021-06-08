import React from "react";
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  const PokeItems = props.list.map((item) => {
    console.log(item);
    return <p>Pokemon</p>;
  });
  return <></>;
};

export default PokeList;
