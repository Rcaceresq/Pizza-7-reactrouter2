import { Link } from "react-router-dom";

const formatCLP = (value) =>
  Number(value).toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

const CardPizza = ({ id, name, price, ingredients = [], img, onAdd = () => {} }) => {
  return (
    <div className="card h-100 shadow-sm d-flex flex-column">
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: 200, objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-1">Ingredientes:</p>
          <ul className="mb-3">
            {ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-bold">{formatCLP(price)}</span>
          <div className="d-flex gap-2">
            <Link to={`/pizza/${id}`} className="btn btn-outline-primary btn-sm">
              Ver más
            </Link>
            <button className="btn btn-success btn-sm" onClick={onAdd}>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;