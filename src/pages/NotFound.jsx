import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-5">
      <h1 className="display-5 fw-bold">404</h1>
      <p className="lead">Ups… la página que buscas no existe.</p>
      <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
    </div>
  );
}
