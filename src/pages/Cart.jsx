import { useMemo } from "react";
import { useCart } from "../context/CountContext.jsx";
import { useUser } from "../context/UserContext.jsx";

const formatCLP = (v) =>
  Number(v || 0).toLocaleString("es-CL", { style: "currency", currency: "CLP" });

const Cart = () => {
  const { items, inc, dec, removeItem, clear, total } = useCart();
  const { token } = useUser();

  const totalItems = useMemo(
    () => items.reduce((acc, it) => acc + (Number(it.qty) || 0), 0),
    [items]
  );

  return (
    <main className="container my-5">
      <h1 className="mb-4">🛒 Carrito</h1>

      {items.length === 0 ? (
        <div className="alert alert-info">Tu carrito está vacío.</div>
      ) : (
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <ul className="list-group">
              {items.map((item) => (
                <li className="list-group-item d-flex align-items-center justify-content-between" key={item.id}>
                  <div className="d-flex align-items-center gap-3">
                    <img src={item.img} alt={item.name} width={64} height={64} className="rounded" />
                    <div>
                      <div className="fw-semibold">{item.name}</div>
                      <small className="text-muted">{formatCLP(item.price)}</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => dec(item.id)}>-</button>
                    <span className="px-2">{item.qty}</span>
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => inc(item.id)}>+</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => removeItem(item.id)}>Quitar</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen</h5>
                <p className="card-text mb-1">Productos: <strong>{totalItems}</strong></p>
                <p className="card-text">Total: <strong>{formatCLP(total)}</strong></p>
                <button
                  className="btn btn-primary w-100 mb-2"
                  disabled={!token}
                  title={!token ? "Debes iniciar sesión para pagar" : "Pagar"}
                  onClick={() => {}}
                >
                  Pagar
                </button>
                <button className="btn btn-outline-secondary w-100" onClick={clear}>Vaciar carrito</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;