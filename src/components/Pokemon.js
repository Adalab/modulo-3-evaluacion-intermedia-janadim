const Pokemon = (props) => {
  const renderTypes = () => {
    console.log(props.types);

    return props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
  };

  return (
    <>
      <article>
        <img src={props.url} alt="Pokemon" width="150" height="200"></img>
        <h2>{props.name}</h2>

        <ul>{renderTypes()}</ul>
      </article>
    </>
  );
};

export default Pokemon;
