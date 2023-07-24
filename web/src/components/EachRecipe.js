function EachRecipe({ recipe }) {
  const {nombre, ingredientes, instrucciones} = recipe;

  return (
    <>
      <h2 className="card__title">{nombre}</h2>
      <p className="card__description">{ingredientes || "Sin nombre"}</p>
      <p className="card__title">{instrucciones}</p>
    </>
  );
}

export default EachRecipe;
