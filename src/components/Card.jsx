

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Min</h2>
      <p>{props.min}</p>
      <h2>Max</h2>
      <p>{props.max}</p>
      <h3>{props.img}</h3>
    </div>
  );
}

export default Card;