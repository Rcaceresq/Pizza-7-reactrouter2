import { useState } from "react";
import FormAlert from "../components/FormAlert.jsx";

const isEmail = (v) => /.+@.+\..+/.test(String(v).toLowerCase());
const minLen = (v, n = 6) => String(v).trim().length >= n;
const required = (v) => String(v).trim().length > 0;

function Register({ onSuccess = () => {} }) {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [alert, setAlert] = useState({ type: "", message: "" });

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!required(form.email) || !required(form.password) || !required(form.confirm))
      return { ok: false, msg: "Todos los campos son obligatorios." };
    if (!isEmail(form.email)) return { ok: false, msg: "Email inválido." };
    if (!minLen(form.password, 6)) return { ok: false, msg: "Mínimo 6 caracteres." };
    if (form.password !== form.confirm) return { ok: false, msg: "Las contraseñas no coinciden." };
    return { ok: true };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });
    const v = validate();
    if (!v.ok) return setAlert({ type: "danger", message: v.msg });
    setAlert({ type: "success", message: "¡Registro exitoso!" });
    onSuccess();
  };

  const disabled = !required(form.email) || !required(form.password) || !required(form.confirm);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="h4 text-center mb-3">Crear cuenta</h1>
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-control"
                         value={form.email} onChange={onChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="password">Contraseña</label>
                  <input id="password" name="password" type="password" className="form-control"
                         value={form.password} onChange={onChange} required minLength={6} />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="confirm">Confirmar contraseña</label>
                  <input id="confirm" name="confirm" type="password" className="form-control"
                         value={form.confirm} onChange={onChange} required />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={disabled}>
                  Crear cuenta
                </button>
              </form>
              <FormAlert type={alert.type} message={alert.message} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register; // ← ¡clave!