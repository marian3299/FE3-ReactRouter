import { Link } from "react-router-dom";
import preguntasGit from "../../preguntas";

const RutaHija = () => {
  return (
    <div>
      RutaHija
      <ul>
        {preguntasGit.map((pregunta) => (
          <Link key={pregunta.id} to={`${pregunta.id}`}>
            <li>{pregunta.pregunta}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RutaHija;
