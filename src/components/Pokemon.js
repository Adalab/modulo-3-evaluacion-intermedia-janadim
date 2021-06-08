import "../stylesheets/App.css";

const Pokemon = (props) => {
  const renderTypes = () => {
    return props.types.map((type, index) => {
      return (
        <li className="types" key={index}>
          {type}
        </li>
      );
    });
  };

  return (
    <>
      <article className="item">
        <img src={props.url} alt="Pokemon" width="200" height="200"></img>
        <h2 className="title">{props.name}</h2>

        <ul className="typesList">{renderTypes()}</ul>
      </article>
    </>
  );
};

export default Pokemon;
