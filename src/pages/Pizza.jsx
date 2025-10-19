import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pizzas } from "../data/pizzas";

const formatCLP = (v) =>
  Number(v || 0).toLocaleString("es-CL", { style: "currency", currency: "CLP" });

export default function Pizza() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/pizzas/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (e) {
        // Fallback a datos locales si la API falla (para que el proyecto funcione)
        const local = pizzas.find((p) => p.id === id) || null;
        if (!cancelled) {
          setData(local);
          setError(local ? null : "No se encontró la pizza.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error && !data) return <p className="text-danger">{error}</p>;
  if (!data) return <p>No hay datos para esta pizza.</p>;

  return (
    <div className="row g-4 align-items-start">
      <div className="col-12 col-md-6">
        <img src={data.img} alt={data.name} className="img-fluid rounded shadow-sm" />
      </div>
      <div className="col-12 col-md-6">
        <h2 className="mb-2">{data.name}</h2>
        <p className="text-muted mb-1">Ingredientes:</p>
        <ul>
          {(data.ingredients || []).map((it) => <li key={it}>{it}</li>)}
        </ul>
        <p className="fs-5 fw-semibold">Precio: {formatCLP(data.price)}</p>
      </div>
    </div>
  );
}