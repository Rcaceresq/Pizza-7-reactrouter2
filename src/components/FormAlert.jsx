
import React from "react";

function FormAlert({ type = "success", message = "" }) {
  if (!message) return null;
  return <div className={`alert alert-${type} mt-3`}>{message}</div>;
}

export default FormAlert;
