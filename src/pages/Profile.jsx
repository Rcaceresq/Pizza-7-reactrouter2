export default function Profile() {
  const email = "usuario@ejemplo.com";
  const logout = () => {
    alert("Sesión cerrada (demo)");
  };
  return (
    <div className="card card-body">
      <h2 className="h5 mb-3">Perfil</h2>
      <p className="mb-2"><strong>Email:</strong> {email}</p>
      <button className="btn btn-outline-danger" onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
