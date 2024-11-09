import { useState } from "react";
import Card from "./Card";
import "../styles/Form.css";

const Formulario = () => {
  const [estudiante, setEstudiante] = useState({ nombre: "", nota: "" });
  const [formEnviado, setFormEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexNombre = /^[a-zA-Z]{3,}$/;
    const regexNota = /^(10|[1-9])$/;

    if (
      regexNombre.test(estudiante.nombre) &&
      regexNota.test(estudiante.nota)
    ) {
      setError(false);
      setFormEnviado(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
    {formEnviado ? (
      <Card nombre={estudiante.nombre} nota={estudiante.nota} />
    ) : (
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
        value={estudiante.nombre}
          type="text"
          onChange={(e) => setEstudiante({ ...estudiante, nombre: e.target.value })
          }
        />
        <label>Nota:</label>
        <input
            value={estudiante.nota}
            type="number"
            onChange={(e) => setEstudiante({ ...estudiante, nota: e.target.value })
            }
        />
        <button type="submit">Enviar</button>
        {error && (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          )}
        </form>)}
    </>
  );
};

export default Formulario;
