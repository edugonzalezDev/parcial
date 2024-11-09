import "../styles/Card.css";

const Card = ({ nombre, nota }) => {
  return (
    <div className="card">
      <h2>Información del estudiante:</h2>
      <p>Nombre: {nombre}</p>
      <p>Nota: {nota}</p>
    </div>
  );
};

export default Card